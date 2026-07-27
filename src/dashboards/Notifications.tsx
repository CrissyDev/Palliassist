import {
  Bell,
  AlertTriangle,
  Pill,
  CalendarClock,
  CheckCircle2,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Critical Pain Alert",
    message: "Jane Mwangi reported pain level 9/10.",
    time: "5 min ago",
    type: "critical",
  },
  {
    id: 2,
    title: "Medication Reminder",
    message: "Peter Otieno has not taken today's medication.",
    time: "20 min ago",
    type: "warning",
  },
  {
    id: 3,
    title: "Appointment Reminder",
    message: "Consultation with Grace Wanjiku starts at 2:00 PM.",
    time: "1 hour ago",
    type: "appointment",
  },
  {
    id: 4,
    title: "Care Plan Updated",
    message: "AI generated a new care recommendation.",
    time: "2 hours ago",
    type: "success",
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case "critical":
      return (
        <AlertTriangle
          className="text-red-600"
          size={22}
        />
      );

    case "warning":
      return (
        <Pill
          className="text-yellow-600"
          size={22}
        />
      );

    case "appointment":
      return (
        <CalendarClock
          className="text-blue-600"
          size={22}
        />
      );

    default:
      return (
        <CheckCircle2
          className="text-green-600"
          size={22}
        />
      );
  }
};

const getColor = (type: string) => {
  switch (type) {
    case "critical":
      return "border-l-red-500";

    case "warning":
      return "border-l-yellow-500";

    case "appointment":
      return "border-l-blue-500";

    default:
      return "border-l-green-500";
  }
};

const Notifications = () => {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-xl font-bold text-slate-800">
            Notifications
          </h2>

          <p className="text-slate-500 mt-1">
            Latest alerts from PalliAssist
          </p>

        </div>

        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

          <Bell className="text-blue-600" />

        </div>

      </div>

      {/* Notifications */}

      <div className="space-y-4 mt-8">

        {notifications.map((notification) => (

          <div
            key={notification.id}
            className={`border-l-4 ${getColor(
              notification.type
            )} bg-slate-50 rounded-xl p-4 hover:bg-slate-100 transition`}
          >

            <div className="flex gap-4">

              <div>

                {getIcon(notification.type)}

              </div>

              <div className="flex-1">

                <div className="flex justify-between">

                  <h3 className="font-semibold text-slate-800">
                    {notification.title}
                  </h3>

                  <span className="text-xs text-slate-400">
                    {notification.time}
                  </span>

                </div>

                <p className="text-sm text-slate-500 mt-2 leading-6">
                  {notification.message}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Footer */}

      <button
        className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition"
      >
        View All Notifications
      </button>

    </div>
  );
};

export default Notifications;