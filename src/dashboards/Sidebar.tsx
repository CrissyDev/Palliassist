import {
  LayoutDashboard,
  Users,
  HeartPulse,
  CalendarDays,
  Pill,
  BrainCircuit,
  FileBarChart2,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Patients",
    icon: Users,
    path: "/patients",
  },
  {
    name: "Voice Assistant",
    icon: BrainCircuit,
    path: "/voice",
  },
  {
    name: "Symptom Tracker",
    icon: HeartPulse,
    path: "/symptoms",
  },
  {
    name: "Appointments",
    icon: CalendarDays,
    path: "/appointments",
  },
  {
    name: "Medication",
    icon: Pill,
    path: "/medication",
  },
  {
    name: "Reports",
    icon: FileBarChart2,
    path: "/reports",
  },
  {
    name: "Notifications",
    icon: Bell,
    path: "/notifications",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-white border-r border-slate-200 shadow-sm flex flex-col">

      {/* Logo */}

      <div className="h-20 flex items-center px-8 border-b border-slate-200">

        {/* Replace this later with your logo */}

        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
          P
        </div>

        <div className="ml-4">

          <h1 className="font-bold text-xl text-slate-800">
            PalliAssist
          </h1>

          <p className="text-sm text-slate-500">
            AI Healthcare
          </p>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-4 py-8">

        <p className="text-xs uppercase tracking-widest text-slate-400 mb-5 px-3">
          Main Menu
        </p>

        <div className="space-y-2">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-slate-600 hover:bg-slate-100"
                  }`
                }
              >
                <Icon size={20} />

                <span className="font-medium">
                  {item.name}
                </span>
              </NavLink>
            );
          })}

        </div>

      </nav>

      {/* Bottom User */}

      <div className="border-t border-slate-200 p-5">

        <div className="flex items-center gap-4">

          <img
            src="https://i.pravatar.cc/100"
            alt="User"
            className="w-12 h-12 rounded-full"
          />

          <div className="flex-1">

            <h3 className="font-semibold text-slate-700">
              Dr. Christal
            </h3>

            <p className="text-sm text-slate-500">
              Healthcare Provider
            </p>

          </div>

        </div>

        <button className="mt-6 w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-3 rounded-xl hover:bg-red-100 transition">

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>
  );
};

export default Sidebar;