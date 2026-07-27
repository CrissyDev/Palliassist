import DashboardLayout from "../layouts/ DashboardLayout";
import VoiceAssistant from "../dashboards/VoiceAssistant";
import AIInsights from "../dashboards/AIInsights";
import Appointments from "../dashboards/Appointments";
import MedicationCard from "../dashboards/MedicationCard";
import Notifications from "../dashboards/Notifications";
import QuickActions from "../dashboards/QuickActions";
import SymptomChart from "../dashboards/SymptomChart";

import {
  FaHeartPulse,
  FaPills,
  FaCalendarCheck,
  FaTriangleExclamation,
} from "react-icons/fa6";

const stats = [
  {
    title: "Patient Wellness",
    value: "Stable",
    icon: FaHeartPulse,
    color: "bg-emerald-500",
  },
  {
    title: "Doses Given Today",
    value: "4 / 5",
    icon: FaPills,
    color: "bg-blue-500",
  },
  {
    title: "Next Check-in",
    value: "2:30 PM",
    icon: FaCalendarCheck,
    color: "bg-cyan-500",
  },
  {
    title: "Caregiver Alerts",
    value: "1 Active",
    icon: FaTriangleExclamation,
    color: "bg-amber-500",
  },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      {/* Caregiver Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl text-white p-8 mb-8 shadow-lg">
        <h2 className="text-3xl font-bold">
          Jambo, Caregiver 👋
        </h2>

        <p className="mt-3 text-blue-100 max-w-2xl text-base leading-relaxed">
          Your daily PalliAssist companion is ready. Track symptoms, manage medication schedules, communicate via voice assistance, and stay in touch with primary care clinicians.
        </p>
      </div>

      {/* Caregiver Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition border border-slate-100"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-slate-500 text-sm font-medium">
                    {stat.title}
                  </p>

                  <h3 className="text-2xl font-extrabold mt-2 text-slate-800">
                    {stat.value}
                  </h3>
                </div>

                <div
                  className={`${stat.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md`}
                >
                  <Icon size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Caregiver Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="xl:col-span-2 space-y-6">
          <VoiceAssistant />

          <SymptomChart />

          <Appointments />
        </div>

        {/* Right Column */}
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