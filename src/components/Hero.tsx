import { motion } from "framer-motion";
import {
  ArrowRight,
  HeartPulse,
  Pill,
  BrainCircuit,
  Activity,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-white"
    >
      {/* Aurora Background */}

      <div className="absolute inset-0 overflow-hidden">

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

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold">

              <HeartPulse size={18} />

              AI Powered Healthcare

            </span>

            <h1 className="mt-8 text-6xl lg:text-7xl font-black leading-tight text-slate-900">

              Compassionate

              <span className="text-blue-600"> AI Support </span>

              for Palliative Care

            </h1>

            <p className="mt-8 text-xl text-slate-600 leading-9 max-w-xl">

              Empowering patients, caregivers and healthcare workers
              with intelligent symptom guidance, medication reminders,
              emotional support and compassionate care across Kenya.

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

            {/* Stats */}

            <div className="mt-16 flex gap-12">

              <div>

                <h2 className="text-4xl font-bold text-blue-700">
                  24/7
                </h2>

                <p className="text-gray-500">
                  AI Assistance
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-blue-700">
                  3+
                </h2>

                <p className="text-gray-500">
                  Languages
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-blue-700">
                  100%
                </h2>

                <p className="text-gray-500">
                  Privacy
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="relative flex justify-center"
          >

            {/* Doctor */}

            <motion.img
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              src="/images/doctor.png"
              alt="Doctor"
              className="relative z-10 w-[430px] rounded-[40px]"
            />

            {/* Floating Card */}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute top-12 -left-6 bg-white shadow-xl rounded-3xl p-5 z-20"
            >

              <div className="flex items-center gap-4">

                <div className="bg-blue-100 p-3 rounded-full">

                  <Activity className="text-blue-600" />

                </div>

                <div>

                  <p className="text-gray-400 text-sm">

                    Pain Score

                  </p>

                  <h3 className="text-2xl font-bold">

                    8 / 10

                  </h3>

                </div>

              </div>

            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute right-0 top-52 bg-white shadow-xl rounded-3xl p-5 z-20"
            >

              <div className="flex items-center gap-4">

                <div className="bg-blue-100 p-3 rounded-full">

                  <Pill className="text-blue-600" />

                </div>

                <div>

                  <p className="text-gray-400 text-sm">

                    Medication

                  </p>

                  <h3 className="font-bold">

                    Morphine

                  </h3>

                </div>

              </div>

            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute left-10 bottom-12 bg-white shadow-xl rounded-3xl p-5 z-20"
            >

              <div className="flex items-center gap-4">

                <div className="bg-blue-100 p-3 rounded-full">

                  <BrainCircuit className="text-blue-600" />

                </div>

                <div>

                  <p className="text-gray-400 text-sm">

                    AI Analysis

                  </p>

                  <h3 className="font-bold">

                    Low Risk

                  </h3>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}