import { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaMicrophone,
  FaArrowLeft,
  FaVolumeHigh,
  FaLanguage,
  FaWandMagicSparkles,
  FaImage,
  FaXmark,
  FaRobot,
  FaWaveSquare,
  FaPaperPlane,
  FaSpinner,
} from "react-icons/fa6";
import { chatWithGemma, fileToBase64 } from "../services/ollama";

type LanguageMode = "english" | "kiswahili" | "sheng";

const LANGUAGE_LABELS: Record<LanguageMode, string> = {
  english: "English",
  kiswahili: "Kiswahili",
  sheng: "Sheng",
};

const LANGUAGE_PROMPTS: Record<LanguageMode, string> = {
  english: "Respond in clear, simple English.",
  kiswahili: "Respond in clear, simple Kiswahili.",
  sheng: "Respond in Sheng, mixing Swahili and English naturally.",
};

const SYSTEM_PROMPT =
  "You are PalliAssist, a compassionate palliative care assistant for Kenyan caregivers. " +
  "Provide clear, practical, non-diagnostic guidance on medication reminders, symptom assessment, " +
  "and localized care instructions. Always recommend seeking professional medical care for emergencies.";

interface SpeechRecognitionEventLike {
  results: { [index: number]: { [index: number]: { transcript: string } } };
}

interface SpeechRecognitionInstance extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
}

const VoiceAssistant = () => {
  const [listening, setListening] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [languageMode, setLanguageMode] = useState<LanguageMode>("english");
  const [voiceOutputEnabled, setVoiceOutputEnabled] = useState(true);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);

  const speakResponse = useCallback((text: string) => {
    if (!voiceOutputEnabled || !text) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageMode === "kiswahili" ? "sw-KE" : "en-KE";
    window.speechSynthesis.speak(utterance);
  }, [voiceOutputEnabled, languageMode]);

  const sendToOllama = useCallback(async (query: string) => {
    const trimmed = query.trim();
    if (!trimmed) {
      setError("Enter a question or use the microphone before sending.");
      return;
    }

    setLoading(true);
    setError(null);
    setResponse("");

    console.log("[VoiceAssistant] Sending query to Ollama", {
      queryLength: trimmed.length,
      hasImage: Boolean(imageBase64),
      languageMode,
    });

    try {
      const reply = await chatWithGemma(
        [
          {
            role: "system",
            content: `${SYSTEM_PROMPT} ${LANGUAGE_PROMPTS[languageMode]}`,
          },
          { role: "user", content: trimmed },
        ],
        imageBase64 ?? undefined
      );

      setResponse(reply);
      speakResponse(reply);
      console.log("[VoiceAssistant] Ollama reply received", {
        replyLength: reply.length,
      });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong talking to Ollama.";
      console.error("[VoiceAssistant] Ollama request failed", err);
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [imageBase64, languageMode, speakResponse]);

  const startListening = useCallback(() => {
    const SpeechRecognitionCtor =
      (window as Window & {
        SpeechRecognition?: new () => SpeechRecognitionInstance;
        webkitSpeechRecognition?: new () => SpeechRecognitionInstance;
      }).SpeechRecognition ??
      (window as Window & {
        webkitSpeechRecognition?: new () => SpeechRecognitionInstance;
      }).webkitSpeechRecognition;

    if (!SpeechRecognitionCtor) {
      console.error("[VoiceAssistant] SpeechRecognition not supported in this browser");
      setError("Voice input is not supported in this browser. Type your question instead.");
      return;
    }

    const recognition = new SpeechRecognitionCtor();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = languageMode === "kiswahili" ? "sw-KE" : "en-KE";

    recognition.onresult = (event: SpeechRecognitionEventLike) => {
      const spoken = event.results[0][0].transcript;
      console.log("[VoiceAssistant] Speech captured", { spoken });
      setTranscript(spoken);
      void sendToOllama(spoken);
    };

    recognition.onerror = (event: { error: string }) => {
      console.error("[VoiceAssistant] Speech recognition error", event.error);
      setError(`Voice input error: ${event.error}`);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
    setListening(true);
    setError(null);
    console.log("[VoiceAssistant] Listening started");
  }, [languageMode, sendToOllama]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setListening(false);
    console.log("[VoiceAssistant] Listening stopped");
  }, []);

  const toggleListening = () => {
    if (listening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const previewUrl = URL.createObjectURL(file);
      const base64 = await fileToBase64(file);
      setSelectedImage(previewUrl);
      setImageBase64(base64);
      console.log("[VoiceAssistant] Image attached", {
        name: file.name,
        size: file.size,
        type: file.type,
      });
    } catch (err) {
      console.error("[VoiceAssistant] Image upload failed", err);
      setError("Could not read the selected image. Try another file.");
    }
  };

  const removeImage = () => {
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage);
    }
    setSelectedImage(null);
    setImageBase64(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const cycleLanguageMode = () => {
    setLanguageMode((current) => {
      const modes: LanguageMode[] = ["english", "kiswahili", "sheng"];
      const nextIndex = (modes.indexOf(current) + 1) % modes.length;
      return modes[nextIndex];
    });
  };

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
      if (selectedImage) {
        URL.revokeObjectURL(selectedImage);
      }
      window.speechSynthesis.cancel();
    };
  }, [selectedImage]);

  return (
    <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 border border-slate-100">
      {/* Top Bar with Navigation */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition"
        >
          <FaArrowLeft size={14} /> Back to Dashboard
        </Link>

        <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-100">
          <FaRobot size={12} /> Gemma 3 · Local Ollama
        </span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            AI Caregiver Assistant
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Speak naturally or upload an image for instant clinical guidance.
          </p>
        </div>

        <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-md shadow-blue-500/20">
          <FaWandMagicSparkles size={22} />
        </div>
      </div>

      {/* Futuristic Glowing Visual Canvas */}
      <div className="mt-8 relative overflow-hidden bg-slate-950 rounded-3xl p-8 text-center text-white shadow-xl">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/30 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-400/20 blur-2xl rounded-full pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Main Voice Glowing Button */}
          <button
            type="button"
            onClick={toggleListening}
            disabled={loading}
            className={`relative w-28 h-28 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl disabled:opacity-60 ${
              listening
                ? "bg-red-500 shadow-red-500/50 scale-105 animate-pulse"
                : "bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-cyan-500/40 hover:scale-105"
            }`}
          >
            <FaMicrophone size={38} className="text-white" />
          </button>

          <h3 className="mt-6 text-xl font-bold tracking-wide">
            {loading
              ? "Gemma 3 is thinking..."
              : listening
                ? "Listening to Voice Input..."
                : "Tap Button to Speak"}
          </h3>

          {/* Futuristic Audio Wave Indicator */}
          <div className="flex items-center gap-2 my-3 text-cyan-400/80">
            <FaWaveSquare className="animate-pulse" size={18} />
            <span className="text-xs tracking-wider uppercase font-semibold text-slate-400">
              {loading
                ? "Querying Local Ollama"
                : listening
                  ? "Processing Audio Signals"
                  : "System Ready"}
            </span>
          </div>

          <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
            Ask about pain levels, dosage timing, Swahili translation, or guidance on critical symptoms.
          </p>
        </div>
      </div>

      {/* Image Attachment & Multimodal Options */}
      <div className="mt-8 bg-slate-50 border border-slate-200/80 rounded-2xl p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
            <FaImage className="text-blue-600" />
            <span>Attach Image for Precise Explanation</span>
          </div>
          <span className="text-xs text-slate-400">Optional</span>
        </div>

        <p className="text-xs text-slate-500 mb-4">
          Upload a clear picture of a prescription, symptom area, or report for real-time visual analysis.
        </p>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          className="hidden"
        />

        {!selectedImage ? (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full border-2 border-dashed border-slate-300 hover:border-blue-500 bg-white hover:bg-blue-50/50 rounded-xl py-4 flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 transition"
          >
            <FaImage size={16} className="text-blue-500" />
            <span>Select Image File</span>
          </button>
        ) : (
          <div className="relative w-32 h-32 rounded-xl overflow-hidden border-2 border-blue-500 shadow-md">
            <img
              src={selectedImage}
              alt="Uploaded Preview"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={removeImage}
              className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 hover:bg-red-700 transition"
            >
              <FaXmark size={12} />
            </button>
          </div>
        )}
      </div>

      {/* Voice Controls */}
      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        <button
          type="button"
          onClick={cycleLanguageMode}
          className="border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3 bg-white hover:bg-slate-50 transition text-left"
        >
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <FaLanguage size={20} />
          </div>
          <div>
            <p className="font-bold text-sm text-slate-800">Language Mode</p>
            <p className="text-xs text-slate-400">{LANGUAGE_LABELS[languageMode]} active</p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setVoiceOutputEnabled((enabled) => !enabled)}
          className={`border rounded-2xl p-4 flex items-center gap-3 transition text-left ${
            voiceOutputEnabled
              ? "border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50"
              : "border-slate-200/80 bg-white hover:bg-slate-50"
          }`}
        >
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <FaVolumeHigh size={20} />
          </div>
          <div>
            <p className="font-bold text-sm text-slate-800">Voice Output</p>
            <p className="text-xs text-slate-400">
              {voiceOutputEnabled ? "Audio speech active" : "Audio speech off"}
            </p>
          </div>
        </button>
      </div>

      {/* AI Response Preview */}
      <div className="mt-6 bg-blue-50/50 border border-blue-100 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-3">
          {loading ? (
            <FaSpinner className="text-blue-600 animate-spin" size={16} />
          ) : (
            <FaWandMagicSparkles className="text-amber-500" size={16} />
          )}
          <h3 className="font-bold text-slate-800 text-sm">
            PalliAssist AI Guidance
          </h3>
        </div>

        {error ? (
          <p className="text-red-600 text-sm leading-relaxed">{error}</p>
        ) : response ? (
          <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">{response}</p>
        ) : (
          <p className="text-slate-600 text-sm leading-relaxed">
            Hello! I&apos;m here to assist you with caregiving tasks. Speak, type, or attach an image to get instant medication reminders, symptom assessments, or localized care instructions via local Gemma 3.
          </p>
        )}
      </div>

      {/* Live Transcript */}
      <div className="mt-6">
        <label htmlFor="voice-transcript" className="font-bold text-slate-800 text-sm block">
          Live Conversation Transcript
        </label>

        <textarea
          id="voice-transcript"
          rows={4}
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
          placeholder="Spoken query or typed question will appear here..."
          className="mt-2 w-full rounded-2xl border border-slate-200 p-4 text-sm text-slate-800 bg-white resize-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
        />

        <button
          type="button"
          onClick={() => void sendToOllama(transcript)}
          disabled={loading || !transcript.trim()}
          className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white text-sm font-semibold rounded-xl transition"
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin" size={14} />
              Asking Gemma 3...
            </>
          ) : (
            <>
              <FaPaperPlane size={14} />
              Send to AI
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default VoiceAssistant;
