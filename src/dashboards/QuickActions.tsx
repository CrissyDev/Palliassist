import {
  Mic,
  UserPlus,
  CalendarPlus,
  FileText,
  Pill,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Start Voice Consultation",
    description: "Talk to the AI assistant using voice.",
    icon: Mic,
    color: "bg-blue-500",
  },
  {
    title: "Register Patient",
    description: "Add a new patient to the platform.",
    icon: UserPlus,
    color: "bg-green-500",
  },
  {
    title: "Book Appointment",
    description: "Schedule a patient consultation.",
    icon: CalendarPlus,
    color: "bg-purple-500",
  },
  {
    title: "Generate Care Plan",
    description: "Let AI recommend a personalized care plan.",
    icon: BrainCircuit,
    color: "bg-cyan-500",
  },
  {
    title: "Prescribe Medication",
    description: "Add or update a patient's medication.",
    icon: Pill,
    color: "bg-orange-500",
  },
  {
    title: "Generate Report",
    description: "Download patient summaries and analytics.",
    icon: FileText,
    color: "bg-pink-500",
  },
];

const QuickActions = () => {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Quick Actions
          </h2>

          <p className="text-slate-500 mt-1">
            Frequently used shortcuts
          </p>
        </div>

        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
          <ArrowRight className="text-blue-600" />
        </div>

      </div>

      {/* Buttons */}

      <div className="grid gap-4 mt-8">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="group flex items-center justify-between border border-slate-200 rounded-2xl p-4 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4">

                <div
                  className={`${action.color} w-12 h-12 rounded-xl flex items-center justify-center text-white`}
                >
                  <Icon size={22} />
                </div>

                <div className="text-left">

                  <h3 className="font-semibold text-slate-800">
                    {action.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {action.description}
                  </p>

                </div>

              </div>

              <ArrowRight
                size={20}
                className="text-slate-400 group-hover:text-blue-600 transition"
              />

            </button>
          );
        })}

      </div>

      {/* AI Shortcut */}

      <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">

        <div className="flex items-center gap-3">

          <BrainCircuit size={28} />

          <div>

            <h3 className="font-bold text-lg">
              AI Assistant Ready
            </h3>

            <p className="text-blue-100 mt-2 leading-6">
              Need help creating a care plan, analyzing symptoms,
              or preparing for a consultation? Let PalliAssist AI
              assist you.
            </p>

          </div>

        </div>

        <button className="mt-6 bg-white text-blue-600 px-5 py-3 rounded-xl font-semibold hover:bg-slate-100 transition">
          Open AI Assistant
        </button>

      </div>

    </div>
  );
};

export default QuickActions;