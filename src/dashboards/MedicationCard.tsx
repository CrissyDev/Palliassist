import {
  Pill,
  Clock3,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

const medications = [
  {
    name: "Morphine",
    dosage: "10 mg",
    time: "08:00 AM",
    status: "Taken",
  },
  {
    name: "Paracetamol",
    dosage: "500 mg",
    time: "12:00 PM",
    status: "Pending",
  },
  {
    name: "Ibuprofen",
    dosage: "400 mg",
    time: "06:00 PM",
    status: "Upcoming",
  },
];

const statusStyles = {
  Taken: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Upcoming: "bg-blue-100 text-blue-700",
};

const MedicationCard = () => {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Medication Schedule
          </h2>

          <p className="text-slate-500 mt-1">
            Today's prescribed medication
          </p>
        </div>

        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
          <Pill className="text-blue-600" />
        </div>

      </div>

      {/* List */}

      <div className="mt-8 space-y-5">

        {medications.map((med) => (
          <div
            key={med.name}
            className="border rounded-2xl border-slate-200 p-4 hover:shadow transition"
          >
            <div className="flex justify-between items-start">

              <div>

                <h3 className="font-semibold text-slate-800">
                  {med.name}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  {med.dosage}
                </p>

                <div className="flex items-center gap-2 mt-3 text-slate-500">
                  <Clock3 size={16} />
                  {med.time}
                </div>

              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  statusStyles[
                    med.status as keyof typeof statusStyles
                  ]
                }`}
              >
                {med.status}
              </span>

            </div>
          </div>
        ))}

      </div>

      {/* AI Reminder */}

      <div className="mt-8 bg-orange-50 border border-orange-200 rounded-2xl p-5">

        <div className="flex gap-3">

          <AlertTriangle className="text-orange-500 mt-1" />

          <div>

            <h3 className="font-semibold text-orange-700">
              AI Reminder
            </h3>

            <p className="text-sm text-orange-600 mt-2 leading-6">
              One patient has not confirmed today's midday medication.
              Consider sending a reminder or contacting the caregiver.
            </p>

          </div>

        </div>

      </div>

      {/* Adherence */}

      <div className="mt-8 rounded-2xl bg-green-50 border border-green-200 p-5">

        <div className="flex items-center gap-3">

          <CheckCircle2 className="text-green-600" />

          <div>

            <h3 className="font-semibold text-green-700">
              Medication Adherence
            </h3>

            <p className="text-sm text-green-600">
              94% adherence today
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default MedicationCard;