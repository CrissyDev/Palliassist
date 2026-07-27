import {
  BrainCircuit,
  AlertTriangle,
  CheckCircle2,
  Activity,
  ArrowRight,
} from "lucide-react";

const insights = [
  {
    title: "High Pain Alert",
    description:
      "2 patients have reported severe pain levels in the last 24 hours.",
    icon: AlertTriangle,
    color: "text-red-600",
    bg: "bg-red-100",
  },
  {
    title: "Medication Adherence",
    description:
      "94% of scheduled medications were taken on time today.",
    icon: CheckCircle2,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "Symptom Monitoring",
    description:
      "AI detected increasing fatigue trends in 4 patients.",
    icon: Activity,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
];

const AIInsights = () => {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-xl font-bold text-slate-800">
            AI Insights
          </h2>

          <p className="text-slate-500 mt-1">
            Recommendations powered by PalliAssist AI
          </p>

        </div>

        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

          <BrainCircuit className="text-blue-600" />

        </div>

      </div>

      {/* Insight Cards */}

      <div className="space-y-4 mt-8">

        {insights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="border border-slate-200 rounded-2xl p-4 hover:border-blue-300 hover:shadow transition"
            >

              <div className="flex items-start gap-4">

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg}`}
                >
                  <Icon className={item.color} />
                </div>

                <div className="flex-1">

                  <h3 className="font-semibold text-slate-800">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500 mt-2 leading-6">
                    {item.description}
                  </p>

                </div>

              </div>

            </div>
          );
        })}

      </div>

      {/* AI Recommendation */}

      <div className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 text-white">

        <h3 className="font-bold text-lg">
          AI Recommendation
        </h3>

        <p className="mt-3 text-blue-100 leading-7">
          Prioritize follow-up for patients experiencing persistent pain,
          increasing fatigue, or missed medication doses. Schedule a care
          review within the next 24 hours.
        </p>

        <button className="mt-6 bg-white text-blue-600 px-5 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-100 transition">

          View Full Report

          <ArrowRight size={18} />

        </button>

      </div>

    </div>
  );
};

export default AIInsights;