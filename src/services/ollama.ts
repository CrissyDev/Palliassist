const OLLAMA_BASE_URL = import.meta.env.VITE_OLLAMA_URL ?? "/ollama";

const OLLAMA_MODEL = import.meta.env.VITE_OLLAMA_MODEL ?? "gemma3";

export type OllamaRole = "system" | "user" | "assistant";

export interface OllamaMessage {
  role: OllamaRole;
  content: string;
}

interface OllamaChatResponse {
  message: {
    role: string;
    content: string;
  };
  done: boolean;
}

export async function chatWithGemma(
  messages: OllamaMessage[],
  imageBase64?: string
): Promise<string> {
  const lastMessage = messages.at(-1);
  if (!lastMessage || lastMessage.role !== "user") {
    throw new Error("Last message must be a user message.");
  }

  const requestMessages = imageBase64
    ? [
        ...messages.slice(0, -1),
        {
          role: "user" as const,
          content: lastMessage.content,
          images: [imageBase64],
        },
      ]
    : messages;

  const body = {
    model: OLLAMA_MODEL,
    messages: requestMessages,
    stream: false,
  };

  const url = `${OLLAMA_BASE_URL}/api/chat`;
  const startedAt = performance.now();

  console.log("[Ollama] Sending chat request", {
    url,
    model: OLLAMA_MODEL,
    messageCount: messages.length,
    hasImage: Boolean(imageBase64),
  });

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.error("[Ollama] Network error — is Ollama running locally?", {
      url,
      model: OLLAMA_MODEL,
      error,
    });
    throw new Error(
      "Could not reach Ollama. Make sure it is running (ollama serve) and gemma3 is pulled.",
      { cause: error }
    );
  }

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    console.error("[Ollama] Request failed", {
      status: response.status,
      statusText: response.statusText,
      body: errorText,
    });
    throw new Error(
      `Ollama returned ${response.status}. Check that model "${OLLAMA_MODEL}" is available.`
    );
  }

  const data = (await response.json()) as OllamaChatResponse;
  const durationMs = Math.round(performance.now() - startedAt);

  console.log("[Ollama] Response received", {
    durationMs,
    contentLength: data.message?.content?.length ?? 0,
  });

  if (!data.message?.content) {
    console.error("[Ollama] Empty response payload", data);
    throw new Error("Ollama returned an empty response.");
  }

  return data.message.content;
}

export async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64 = result.split(",")[1];
      if (!base64) {
        reject(new Error("Failed to encode image."));
        return;
      }
      resolve(base64);
    };
    reader.onerror = () => reject(new Error("Failed to read image file."));
    reader.readAsDataURL(file);
  });
}
