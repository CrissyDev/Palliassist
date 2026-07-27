import { Link, useNavigate } from "react-router-dom";
import type { FormEvent } from "react";
import { User, Mail, Eye, ArrowLeft } from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Temporary navigation
    // Later this will save the user first
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen w-full bg-[#EBF1F6] flex items-center justify-center p-4 lg:p-8 font-sans">
      <div className="w-full max-w-[1280px] min-h-[720px] bg-white rounded-[32px] shadow-2xl overflow-hidden grid lg:grid-cols-2 border border-white/60">
        
        {/* LEFT FORM PANEL */}
        <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between bg-[#F8FAFC]">
          <div>
            {/* Logo Section */}
            <div className="flex items-center gap-3 mb-8">
              <img
                src="/image/logo1.png"
                alt="PalliAssist Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                PalliAssist
              </span>
            </div>

            {/* Header */}
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Create Account
            </h1>
            <p className="text-slate-400 text-sm mt-1 font-medium">
              Join Us to Access Compassionate Healthcare AI
            </p>

            {/* Sign In / Sign Up Toggle Pill */}
            <div className="mt-8 bg-[#E2E8F0]/60 p-1 rounded-full flex items-center text-sm font-semibold max-w-sm">
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="flex-1 py-2.5 rounded-full text-slate-500 hover:text-slate-800 text-center transition"
              >
                Sign in
              </button>
              <button
                type="button"
                className="flex-1 py-2.5 rounded-full bg-blue-600 text-white shadow-md text-center transition"
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSignup}
              className="space-y-4 mt-8 max-w-md"
            >
              {/* Full Name Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-[#F1F5F9] border border-slate-200/80 rounded-full py-3.5 pl-6 pr-12 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white transition"
                />
                <User className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#F1F5F9] border border-slate-200/80 rounded-full py-3.5 pl-6 pr-12 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white transition"
                />
                <Mail className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              </div>

              {/* Password Input */}
              <div className="relative">
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full bg-[#F1F5F9] border border-slate-200/80 rounded-full py-3.5 pl-6 pr-12 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:bg-white transition"
                />
                <Eye className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer" size={18} />
              </div>

              {/* Main CTA */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-full shadow-lg shadow-blue-500/25 transition mt-2"
              >
                Sign Up
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6 max-w-md flex items-center justify-center">
              <div className="border-t border-slate-200 w-full"></div>
              <span className="bg-[#F8FAFC] px-3 text-xs text-slate-400 font-medium uppercase tracking-wider absolute">
                OR
              </span>
            </div>

            {/* Social Logins */}
            <div className="space-y-3 max-w-md">
              <button
                type="button"
                className="w-full bg-[#18181B] hover:bg-black text-white font-medium py-3 rounded-full flex items-center justify-center gap-2 text-sm transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.67-.82 1.13-1.96.99-3.1-.98.04-2.19.66-2.88 1.48-.62.72-1.16 1.88-1.01 3 1.1.09 2.23-.56 2.9-1.38z"/>
                </svg>
                Sign up with Apple
              </button>

              <button
                type="button"
                className="w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium py-3 rounded-full flex items-center justify-center gap-2 text-sm transition"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                Sign up with Google
              </button>
            </div>
          </div>

          {/* Footer Back Button */}
          <div className="pt-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-slate-700 transition"
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL ARTWORK PANEL */}
        <div className="hidden lg:relative lg:flex bg-gradient-to-br from-blue-600 via-blue-800 to-indigo-900 overflow-hidden items-end p-8">
          <img
            src="/image/limage.jpg"
            alt="PalliAssist Visual Artwork"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80"
          />

          {/* Decorative Subtle Gradient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/30 blur-3xl rounded-full"></div>

          {/* Glassmorphism Badge at the bottom */}
          <div className="relative z-10 w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center text-white/80 text-[11px] leading-relaxed shadow-2xl">
            <p>© {new Date().getFullYear()} PalliAssist Kenya. All rights reserved.</p>
            <p className="mt-0.5 text-white/60">
              Empowering patients, caregivers, and clinicians with intelligent symptom management.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}