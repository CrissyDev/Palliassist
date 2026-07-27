import {
  CalendarDays,
  Clock3,
  UserRound,
  Video,
  CheckCircle2,
} from "lucide-react";

const appointments = [
  {
    patient: "Jane Mwangi",
    doctor: "Dr. Christal",
    time: "09:00 AM",
    status: "Upcoming",
  },
  {
    patient: "Peter Otieno",
    doctor: "Dr. Ahmed",
    time: "10:30 AM",
    status: "In Progress",
  },
  {
    patient: "Grace Wanjiku",
    doctor: "Dr. Christal",
    time: "01:00 PM",
    status: "Completed",
  },
];

const badgeColor = (status: string) => {
  switch (status) {
    case "Upcoming":
      return "bg-blue-100 text-blue-700";
    case "In Progress":
      return "bg-yellow-100 text-yellow-700";
    case "Completed":
      return "bg-green-100 text-green-700";
    default:
      return "bg-slate-100 text-slate-600";
  }
};

const Appointments = () => {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Today's Appointments
          </h2>

          <p className="text-slate-500 mt-2">
            Manage scheduled consultations.
          </p>

        </div>

        <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center">

          <CalendarDays className="text-blue-600" />

        </div>

      </div>

      {/* Appointment List */}

      <div className="space-y-5">

        {appointments.map((appointment) => (

          <div
            key={appointment.patient}
            className="border border-slate-200 rounded-2xl p-5 hover:shadow-md transition"
          >

            <div className="flex justify-between items-start">

              <div>

                <h3 className="font-semibold text-lg text-slate-800">
                  {appointment.patient}
                </h3>

                <div className="flex items-center gap-2 text-slate-500 mt-3">

                  <UserRound size={17} />

                  {appointment.doctor}

                </div>

                <div className="flex items-center gap-2 text-slate-500 mt-2">

                  <Clock3 size={17} />

                  {appointment.time}

                </div>

              </div>

              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${badgeColor(
                  appointment.status
                )}`}
              >
                {appointment.status}
              </span>

            </div>

            <div className="flex gap-4 mt-6">

              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition">

                <Video size={18} />

                Join

              </button>

              <button className="flex items-center gap-2 border border-slate-300 hover:bg-slate-50 px-5 py-3 rounded-xl transition">

                <CheckCircle2 size={18} />

                View Details

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Appointments;