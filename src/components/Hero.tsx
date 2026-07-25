import { motion } from "framer-motion";
import {
  ArrowRight,
  HeartPulse,
  Pill,
  BrainCircuit,
  Activity,
  Calendar,
  Smile,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-white"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative Background Dots */}
        <div className="absolute top-24 left-1/3 w-3 h-3 rounded-full bg-blue-300"></div>
        <div className="absolute top-52 right-40 w-4 h-4 rounded-full bg-cyan-300"></div>
        <div className="absolute bottom-44 left-20 w-2 h-2 rounded-full bg-blue-500"></div>
        <div className="absolute bottom-20 right-1/4 w-3 h-3 rounded-full bg-blue-200"></div>

        <motion.div
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -40, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[500px] h-[500px] rounded-full bg-blue-300/30 blur-[120px] top-[-150px] left-[-100px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 80, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[450px] h-[450px] rounded-full bg-cyan-300/30 blur-[120px] bottom-[-100px] right-[-100px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold">
              <HeartPulse size={18} />
              AI Powered Healthcare
            </span>

            <h1 className="mt-8 text-6xl lg:text-7xl font-black leading-tight text-slate-900">
              Compassionate AI
              <span className="text-blue-600"> Healthcare Support </span>
              for Palliative Care
            </h1>

            <p className="mt-8 text-xl text-slate-600 leading-9 max-w-xl">
              Empowering patients, caregivers and healthcare workers with
              intelligent symptom guidance, medication reminders, emotional
              support and compassionate care across Kenya.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button className="flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 transition">
                Get Started
                <ArrowRight />
              </button>

              <button className="rounded-full border border-blue-600 px-8 py-4 text-blue-600 font-semibold hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>

            {/* Trusted By Section */}
            <div className="mt-10 flex items-center gap-8 text-gray-400 font-medium">
              <span>Trusted By</span>
              <div className="w-10 h-[2px] bg-gray-300"></div>
              <span>Patients</span>
              <span>Caregivers</span>
              <span>Clinicians</span>
            </div>

            {/* Improved Stats Section */}
            <div className="mt-16 grid grid-cols-3 gap-6 border-t border-gray-100 pt-8">
              <div>
                <h2 className="text-3xl font-bold text-blue-700">24/7</h2>
                <p className="text-gray-500 font-medium mt-1">AI Support</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-700">3+ Languages</h2>
                <p className="text-gray-500 text-sm mt-1">
                  English, Kiswahili, Sheng
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-700">100% Private</h2>
                <p className="text-gray-500 text-sm mt-1">
                  Secure & Encrypted
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Doctor Image with Glowing Backdrop */}
            <div className="relative">
              {/* Blue Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[520px] h-[520px] rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 opacity-20 blur-xl"></div>
              </div>

              {/* Decorative Ring & Accents */}
              <div className="absolute left-10 top-6 w-[460px] h-[460px] rounded-full border border-blue-200"></div>
              <div className="absolute right-8 bottom-10 w-8 h-8 rounded-full bg-blue-500"></div>
              <div className="absolute left-2 bottom-32 w-5 h-5 rounded-full bg-cyan-300"></div>

              <motion.img
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                src="/image/pall2.jpg"
                alt="Doctor"
                className="relative z-20 w-[440px] object-cover"
              />
            </div>

            {/* Floating Card 1: Pain Score */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute top-12 -left-6 bg-white/80 backdrop-blur-xl shadow-2xl border border-white/60 rounded-3xl p-5 z-20"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Activity className="text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Pain Score</p>
                  <h3 className="text-2xl font-bold">8 / 10</h3>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2: Medication */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute right-0 top-52 bg-white/80 backdrop-blur-xl shadow-2xl border border-white/60 rounded-3xl p-5 z-20"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Pill className="text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Medication</p>
                  <h3 className="font-bold">Morphine</h3>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 3: AI Analysis */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute left-10 bottom-12 bg-white/80 backdrop-blur-xl shadow-2xl border border-white/60 rounded-3xl p-5 z-20"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <BrainCircuit className="text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">AI Analysis</p>
                  <h3 className="font-bold">Low Risk</h3>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 4: Today's Mood */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute bottom-24 -right-8 bg-white/80 backdrop-blur-xl shadow-2xl border border-white/60 rounded-3xl p-5 z-20"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Smile className="text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Today's Mood</p>
                  <h3 className="font-bold">😊 Calm</h3>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 5: Next Visit */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute top-80 -left-14 bg-white/80 backdrop-blur-xl shadow-2xl border border-white/60 rounded-3xl p-5 z-20"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Calendar className="text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Next Visit</p>
                  <h3 className="font-bold">Tomorrow</h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}