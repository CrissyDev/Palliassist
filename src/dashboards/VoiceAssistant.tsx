import { useState, useRef } from "react";
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
} from "react-icons/fa6";

const VoiceAssistant = () => {
  const [listening, setListening] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleListening = () => {
    setListening(!listening);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

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
          <FaRobot size={12} /> Multimodal AI Ready
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
            onClick={toggleListening}
            className={`relative w-28 h-28 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
              listening
                ? "bg-red-500 shadow-red-500/50 scale-105 animate-pulse"
                : "bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-cyan-500/40 hover:scale-105"
            }`}
          >
            <FaMicrophone size={38} className="text-white" />
          </button>

          <h3 className="mt-6 text-xl font-bold tracking-wide">
            {listening ? "Listening to Voice Input..." : "Tap Button to Speak"}
          </h3>

          {/* Futuristic Audio Wave Indicator */}
          <div className="flex items-center gap-2 my-3 text-cyan-400/80">
            <FaWaveSquare className="animate-pulse" size={18} />
            <span className="text-xs tracking-wider uppercase font-semibold text-slate-400">
              {listening ? "Processing Audio Signals" : "System Ready"}
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
        <button className="border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3 bg-white hover:bg-slate-50 transition text-left">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <FaLanguage size={20} />
          </div>
          <div>
            <p className="font-bold text-sm text-slate-800">Language Mode</p>
            <p className="text-xs text-slate-400">English / Kiswahili / Sheng</p>
          </div>
        </button>

        <button className="border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3 bg-white hover:bg-slate-50 transition text-left">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <FaVolumeHigh size={20} />
          </div>
          <div>
            <p className="font-bold text-sm text-slate-800">Voice Output</p>
            <p className="text-xs text-slate-400">Audio Speech Active</p>
          </div>
        </button>
      </div>

      {/* AI Response Preview */}
      <div className="mt-6 bg-blue-50/50 border border-blue-100 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <FaWandMagicSparkles className="text-amber-500" size={16} />
          <h3 className="font-bold text-slate-800 text-sm">
            PalliAssist AI Guidance
          </h3>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Hello! I'm here to assist you with caregiving tasks. You can speak or attach an image to get instant medication reminders, symptom assessments, or localized care instructions.
        </p>
      </div>

      {/* Live Transcript */}
      <div className="mt-6">
        <label className="font-bold text-slate-800 text-sm block">
          Live Conversation Transcript
        </label>

        <textarea
          rows={4}
          placeholder="Spoken query or generated AI advice will appear here in real time..."
          className="mt-2 w-full rounded-2xl border border-slate-200 p-4 text-sm text-slate-800 bg-white resize-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
        />
      </div>
    </div>
  );
};

export default VoiceAssistant;