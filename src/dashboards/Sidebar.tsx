import {
  LayoutDashboard,
  CalendarDays,
  BrainCircuit,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  }, 
  {
    name: "Voice Assistant",
    icon: BrainCircuit,
    path: "/dashboard/voice",
  },
  {
    name: "Appointments",
    icon: CalendarDays,
    path: "/dashboard/appointments",
  },
  {
    name: "Notifications",
    icon: Bell,
    path: "/dashboard/notifications",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-72 flex-col border-r border-slate-200 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex h-20 items-center border-b border-slate-200 px-8">
        <img
          src="/image/logo1.png"
          alt="PalliAssist"
          className="h-12 w-12 rounded-xl object-contain"
        />

        <div className="ml-4">
          <h1 className="text-xl font-bold text-slate-800">
            PalliAssist
          </h1>

          <p className="text-sm text-slate-500">
            AI Healthcare
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-8">
        <p className="mb-5 px-3 text-xs uppercase tracking-widest text-slate-400">
          Main Menu
        </p>

        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/dashboard"}
                className={({ isActive }) =>
                  `flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
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

      {/* User */}
      <div className="border-t border-slate-200 p-5">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/100"
            alt="User"
            className="h-12 w-12 rounded-full"
          />

          <div className="flex-1">
            <h3 className="font-semibold text-slate-700">
              Caregiver
            </h3>

            <p className="text-sm text-slate-500">
              PalliAssist Companion
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate("/login")}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-red-50 py-3 text-red-600 transition hover:bg-red-100 font-semibold"
        >
          <LogOut size={18} />

          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;