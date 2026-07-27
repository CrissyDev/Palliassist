import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import VoiceAssistant from "./dashboards/VoiceAssistant";
import Appointments from "./dashboards/Appointments";
import Notifications from "./dashboards/Notifications";

export default function App() {
  return (
    <Routes>
      {/* Landing */}
      <Route path="/" element={<LandingPage />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Existing Dashboard Pages */}
      <Route
        path="/dashboard/voice"
        element={<VoiceAssistant />}
      />

      <Route
        path="/dashboard/appointments"
        element={<Appointments />}
      />

      <Route
        path="/dashboard/notifications"
        element={<Notifications />}
      />

      {/* 404 */}
      <Route
        path="*"
        element={
          <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="text-center">
              <h1 className="text-7xl font-bold text-blue-600">
                404
              </h1>

              <p className="mt-4 text-lg text-slate-600">
                Oops! The page you're looking for doesn't exist.
              </p>

              <a
                href="/"
                className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
              >
                Back to Home
              </a>
            </div>
          </div>
        }
      />
    </Routes>
  );
}