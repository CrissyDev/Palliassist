import DashboardLayout from "../layouts/ DashboardLayout";

import VoiceAssistant from "../dashboards/VoiceAssistant";
import AIInsights from "../dashboards/AIInsights";
import Appointments from "../dashboards/Appointments";
import MedicationCard from "../dashboards/MedicationCard";
import Notifications from "../dashboards/Notifications";
import QuickActions from "../dashboards/QuickActions";
import SymptomChart from "../dashboards/SymptomChart";

import {
  Users,
  CalendarDays,
  Activity,
  HeartPulse,
} from "lucide-react";

const stats = [
  {
    title: "Patients",
    value: "128",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Appointments",
    value: "18",
    icon: CalendarDays,
    color: "bg-green-500",
  },
  {
    title: "Active Care Plans",
    value: "94",
    icon: HeartPulse,
    color: "bg-pink-500",
  },
  {
    title: "Critical Alerts",
    value: "6",
    icon: Activity,
    color: "bg-red-500",
  },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      {/* Welcome Banner */}

      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl text-white p-8 mb-8 shadow-lg">

        <h2 className="text-3xl font-bold">
          Welcome back 👋
        </h2>

        <p className="mt-3 text-blue-100 max-w-2xl">
          Your AI-powered palliative care dashboard helps you monitor
          patients, communicate through voice, manage appointments,
          and receive intelligent healthcare insights.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center">

                <div>

                  <p className="text-slate-500">
                    {stat.title}
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    {stat.value}
                  </h3>

                </div>

                <div
                  className={`${stat.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white`}
                >
                  <Icon size={28} />
                </div>

              </div>
            </div>
          );
        })}

      </div>

      {/* Dashboard Grid */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Left */}

        <div className="xl:col-span-2 space-y-6">

          <VoiceAssistant />

          <SymptomChart />

          <Appointments />

        </div>

        {/* Right */}

        <div className="space-y-6">

          <AIInsights />

          <MedicationCard />

          <Notifications />

          <QuickActions />

        </div>

      </div>

    </DashboardLayout>
  );
};

export default Dashboard;