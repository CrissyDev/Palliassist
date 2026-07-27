import { useState } from "react";
import {
  Mic,
  MicOff,
  Volume2,
  Languages,
  Bot,
  Sparkles,
} from "lucide-react";

const VoiceAssistant = () => {
  const [listening, setListening] = useState(false);

  const toggleListening = () => {
    setListening(!listening);
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm p-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Voice Assistant
          </h2>

          <p className="text-slate-500 mt-2">
            Speak naturally with PalliAssist AI.
          </p>
        </div>

        <div className="bg-blue-100 text-blue-700 p-3 rounded-xl">
          <Bot size={26} />
        </div>

      </div>

      {/* Microphone */}

      <div className="flex flex-col items-center mt-10">

        <button
          onClick={toggleListening}
          className={`w-28 h-28 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
            listening
              ? "bg-red-500 animate-pulse"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {listening ? (
            <MicOff className="text-white" size={40} />
          ) : (
            <Mic className="text-white" size={40} />
          )}
        </button>

        <h3 className="mt-6 text-xl font-semibold">

          {listening ? "Listening..." : "Tap to Speak"}

        </h3>

        <p className="text-slate-500 mt-2 text-center max-w-md">

          Ask about symptoms, medication, appointments,
          or request AI care recommendations.

        </p>

      </div>

      {/* Voice Controls */}

      <div className="grid md:grid-cols-2 gap-4 mt-10">

        <button className="border rounded-2xl p-4 flex items-center gap-3 hover:bg-slate-50 transition">

          <Languages className="text-blue-600" />

          <div className="text-left">
            <p className="font-semibold">
              Language
            </p>

            <p className="text-sm text-slate-500">
              English / Kiswahili
            </p>
          </div>

        </button>

        <button className="border rounded-2xl p-4 flex items-center gap-3 hover:bg-slate-50 transition">

          <Volume2 className="text-green-600" />

          <div className="text-left">
            <p className="font-semibold">
              Voice Output
            </p>

            <p className="text-sm text-slate-500">
              Enabled
            </p>
          </div>

        </button>

      </div>

      {/* AI Response */}

      <div className="mt-10 bg-slate-50 rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-4">

          <Sparkles className="text-yellow-500" />

          <h3 className="font-semibold text-slate-700">
            AI Response Preview
          </h3>

        </div>

        <p className="text-slate-600 leading-7">

          Hello! 👋 I'm your PalliAssist Voice AI.

          I can help you:

          • Track symptoms

          • Explain medications

          • Book appointments

          • Generate care recommendations

          • Support caregivers

          • Answer palliative care questions

        </p>

      </div>

      {/* Transcript */}

      <div className="mt-8">

        <label className="font-semibold text-slate-700">
          Live Transcript
        </label>

        <textarea
          rows={5}
          placeholder="Your conversation will appear here..."
          className="mt-3 w-full rounded-2xl border border-slate-200 p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

    </div>
  );
};

export default VoiceAssistant;