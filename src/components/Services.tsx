// src/components/Services.tsx

import {
  BrainCircuit,
  HeartPulse,
  Pill,
  Users,
  BookOpen,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "AI Symptom Support",
    description:
      "Gemma AI helps patients understand symptoms, receive guidance, and know when to seek medical attention.",
    icon: BrainCircuit,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Pain Management",
    description:
      "Track pain levels and receive personalized recommendations for comfort and symptom relief.",
    icon: HeartPulse,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Medication Reminders",
    description:
      "Never miss a dose with smart reminders, medication schedules, and caregiver notifications.",
    icon: Pill,
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Caregiver Support",
    description:
      "Empower family members with caregiving resources, guidance, and emotional wellness tools.",
    icon: Users,
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "Health Education",
    description:
      "Access trusted palliative care information in simple language, available in English and Kiswahili.",
    icon: BookOpen,
    color: "from-blue-600 to-indigo-600",
  },
  {
    title: "Appointment Management",
    description:
      "Manage clinic visits, follow-ups, and treatment schedules with automatic reminders.",
    icon: CalendarCheck,
    color: "from-cyan-600 to-blue-500",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-slate-50 py-24 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6">
            Comprehensive Palliative Care,
            <span className="text-blue-600"> Powered by AI</span>
          </h2>

          <p className="mt-6 text-slate-600 text-lg leading-relaxed">
            PalliAssist Kenya combines compassionate healthcare with artificial
            intelligence to support patients, caregivers, and healthcare
            professionals throughout every stage of care.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 mt-20 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .6,
                  delay: index * .15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100"
              >
                {/* Top Gradient */}

                <div
                  className={`h-2 bg-gradient-to-r ${service.color}`}
                />

                <div className="p-8">
                  {/* Icon */}

                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color}
                    flex items-center justify-center text-white mb-6
                    group-hover:scale-110 transition`}
                  >
                    <Icon size={30} />
                  </div>

                  {/* Title */}

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p className="text-slate-600 leading-7">
                    {service.description}
                  </p>

                  {/* Link */}

                  <button
                    className="mt-8 flex items-center gap-2
                    text-blue-600 font-semibold group-hover:text-blue-700"
                  >
                    Learn More

                    <ArrowRight
                      className="transition group-hover:translate-x-1"
                      size={18}
                    />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-12 text-white overflow-hidden relative"
        >
          {/* Decorative */}

          <div className="absolute w-72 h-72 bg-white/10 rounded-full -right-20 -top-20" />
          <div className="absolute w-52 h-52 bg-white/10 rounded-full -left-16 -bottom-16" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div>
              <h3 className="text-4xl font-bold">
                Ready to experience compassionate AI care?
              </h3>

              <p className="mt-5 text-blue-100 text-lg max-w-2xl">
                Join patients, caregivers, and healthcare professionals
                transforming palliative care through intelligent digital
                support.
              </p>
            </div>

            <button
              className="bg-white text-blue-700 hover:bg-slate-100
              font-semibold px-8 py-4 rounded-xl flex items-center gap-3 transition"
            >
              Get Started

              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;