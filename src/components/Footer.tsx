import { Link } from "react-router-dom";
import {
  HeartPulse,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Send,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: FaXTwitter,
      href: "https://x.com",
      label: "X",
    },
  ];

  return (
    <footer className="bg-slate-950 text-white">
      {/* Newsletter */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold">
                Stay Connected
              </span>

              <h2 className="text-4xl font-bold mt-5">
                Join Our Community
              </h2>

              <p className="text-slate-400 mt-4 leading-7 max-w-xl">
                Subscribe to receive updates about palliative care,
                AI innovations, and healthcare resources.
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
              />

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
              >
                Subscribe
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                <HeartPulse size={26} />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  PalliAssist
                </h2>

                <p className="text-blue-400 text-sm">
                  Kenya
                </p>
              </div>
            </div>

            <p className="text-slate-400 mt-6 leading-7">
              AI-powered palliative care designed to empower
              patients, caregivers, and healthcare providers.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-blue-600 transition flex items-center justify-center"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-blue-400">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400">About</a></li>
              <li><a href="#services" className="hover:text-blue-400">Services</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
              <li><Link to="/login" className="hover:text-blue-400">Login</Link></li>
              <li><Link to="/signup" className="hover:text-blue-400">Sign Up</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li>AI Symptom Support</li>
              <li>Pain Management</li>
              <li>Medication Reminders</li>
              <li>Caregiver Support</li>
              <li>Health Education</li>
              <li>Appointment Scheduling</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-slate-400">
              <div className="flex gap-3">
                <Phone className="text-blue-400 mt-1" size={18} />
                <span>+254 700 123 456</span>
              </div>

              <div className="flex gap-3">
                <Mail className="text-blue-400 mt-1" size={18} />
                <span>support@palliassist.co.ke</span>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-blue-400 mt-1" size={18} />
                <span>Mombasa, Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-slate-500">
            © {new Date().getFullYear()} PalliAssist Kenya. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-blue-400">
              Privacy Policy
            </a>

            <a href="#" className="text-slate-500 hover:text-blue-400">
              Terms of Service
            </a>

            <button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition"
            >
              <ArrowUp size={20} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;