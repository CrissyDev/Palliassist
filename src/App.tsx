import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* 404 */}
      <Route
        path="*"
        element={
          <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="text-center">
              <h1 className="text-7xl font-bold text-blue-600">404</h1>

              <p className="mt-4 text-slate-600 text-lg">
                Oops! The page you're looking for doesn't exist.
              </p>

              <a
                href="/"
                className="inline-block mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
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