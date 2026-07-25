import { Link } from "react-router-dom";
import { HeartPulse, Mail, Lock } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center px-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left */}
        <div className="hidden lg:flex bg-gradient-to-br from-blue-700 to-cyan-600 p-12 text-white flex-col justify-center">

          <div className="flex items-center gap-3 mb-8">
            <HeartPulse size={42} />
            <h1 className="text-3xl font-bold">
              PalliAssist Kenya
            </h1>
          </div>

          <h2 className="text-4xl font-bold leading-tight">
            Welcome Back
          </h2>

          <p className="mt-6 text-blue-100 leading-8">
            Continue supporting patients and caregivers with
            compassionate AI-powered palliative care.
          </p>

        </div>

        {/* Right */}

        <div className="p-10 lg:p-14">

          <h2 className="text-3xl font-bold text-slate-900">
            Login
          </h2>

          <p className="text-slate-500 mt-2">
            Sign in to your account
          </p>

          <form className="space-y-6 mt-10">

            <div>

              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-4 top-4 text-slate-400" size={20} />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-4 top-4 text-slate-400" size={20} />

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full border rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
            >
              Login
            </button>

          </form>

          <p className="text-center mt-8 text-slate-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-semibold"
            >
              Create Account
            </Link>
          </p>

          <Link
            to="/"
            className="block text-center mt-6 text-blue-600 hover:underline"
          >
            ← Back to Home
          </Link>

        </div>

      </div>
    </div>
  );
}