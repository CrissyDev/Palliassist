import {
  Bell,
  Search,
  Mic,
  CalendarDays,
  Plus,
} from "lucide-react";

const Topbar = () => {
  const today = new Date().toLocaleDateString("en-KE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200 h-20 flex items-center justify-between px-8">

      {/* Left */}

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-1">
          {today}
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="hidden lg:flex items-center bg-slate-100 rounded-xl px-4 py-3 w-80">

          <Search
            className="text-slate-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search patients..."
            className="bg-transparent outline-none ml-3 flex-1 text-sm"
          />

        </div>

        {/* Voice AI */}

        <button className="w-12 h-12 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition flex items-center justify-center">

          <Mic size={20} />

        </button>

        {/* New Consultation */}

        <button className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition">

          <Plus size={18} />

          New Consultation

        </button>

        {/* Calendar */}

        <button className="w-12 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 transition flex items-center justify-center">

          <CalendarDays size={20} />

        </button>

        {/* Notifications */}

        <button className="relative w-12 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 transition flex items-center justify-center">

          <Bell size={20} />

          <span className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-red-500"></span>

        </button>

        {/* User */}

        <div className="flex items-center gap-3 bg-slate-100 rounded-xl px-3 py-2">

          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="Doctor"
            className="w-11 h-11 rounded-full"
          />

          <div className="hidden xl:block">

            <h3 className="font-semibold text-slate-700">
              Dr. Christal
            </h3>

            <p className="text-xs text-slate-500">
              Care Provider
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Topbar;