import { motion } from "framer-motion";
import {
  HeartHandshake,
  Brain,
  ShieldCheck,
  Users,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    description:
      "Supporting patients and families with AI-powered guidance throughout their palliative care journey.",
  },
  {
    icon: Brain,
    title: "Powered by Gemma AI",
    description:
      "Providing evidence-based symptom support, medication guidance, and caregiver education.",
  },
  {
    icon: ShieldCheck,
    title: "Private & Secure",
    description:
      "Designed with patient privacy at its core using secure healthcare practices.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 bg-white overflow-hidden"
    >
      {/* Decorative Blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-200/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="rounded-[40px] overflow-hidden shadow-2xl">

              <img
                src="/images/about-doctor.jpg"
                alt="About PalliAssist"
                className="w-full object-cover"
              />

            </div>

            {/* Floating Card */}

            <motion.div
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -bottom-8 -right-8 bg-white rounded-3xl shadow-2xl px-8 py-6"
            >

              <Users
                className="text-blue-600 mb-3"
                size={34}
              />

              <h3 className="text-4xl font-bold text-slate-900">
                10K+
              </h3>

              <p className="text-gray-500">
                Future Patients Supported
              </p>

            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <span className="inline-block bg-blue-100 text-blue-700 rounded-full px-5 py-2 font-semibold">

              ABOUT US

            </span>

            <h2 className="text-5xl font-black mt-6 leading-tight">

              Bringing Compassionate Care

              <span className="text-blue-600">

                {" "}Closer to Every Home

              </span>

            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">

              PalliAssist Kenya is an AI-powered companion built to
              support patients living with serious illnesses,
              caregivers, nurses, hospices, and Community Health
              Promoters by making quality palliative care guidance
              available anytime and anywhere.

            </p>

            <div className="mt-12 space-y-8">

              {features.map((feature) => {

                const Icon = feature.icon;

                return (

                  <motion.div
                    key={feature.title}
                    whileHover={{
                      x: 10,
                    }}
                    className="flex gap-5"
                  >

                    <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center">

                      <Icon
                        size={30}
                        className="text-blue-700"
                      />

                    </div>

                    <div>

                      <h3 className="font-bold text-xl">

                        {feature.title}

                      </h3>

                      <p className="mt-2 text-gray-500 leading-7">

                        {feature.description}

                      </p>

                    </div>

                  </motion.div>

                );

              })}

            </div>

            <button
              className="mt-12 flex items-center gap-3 bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-full text-white font-semibold"
            >

              Learn More

              <ArrowRight />

            </button>

          </motion.div>

        </div>

      </div>

    </section>
  );
}