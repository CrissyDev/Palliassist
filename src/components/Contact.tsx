import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  HeartHandshake,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white to-blue-50 py-24 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6">
            We'd Love to
            <span className="text-blue-600"> Hear From You</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Whether you're a patient, caregiver, healthcare professional, or
            organization, we're here to help. Reach out and our team will get
            back to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 mt-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Phone className="text-blue-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">Phone</h4>
                    <p className="text-slate-600 mt-1">
                      +254 700 123 456
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Mail className="text-blue-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600 mt-1">
                      support@palliassist.co.ke
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                    <MapPin className="text-blue-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">Location</h4>
                    <p className="text-slate-600 mt-1">
                      Mombasa, Kenya
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Clock className="text-blue-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Working Hours
                    </h4>
                    <p className="text-slate-600 mt-1">
                      Monday – Friday
                    </p>
                    <p className="text-slate-600">
                      8:00 AM – 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Card */}
            <div className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <HeartHandshake size={38} />
                <h3 className="text-2xl font-bold">
                  Need Immediate Assistance?
                </h3>
              </div>

              <p className="text-blue-100 leading-7">
                PalliAssist provides AI-powered guidance, but if you're
                experiencing a medical emergency, please contact your nearest
                healthcare facility or emergency services immediately.
              </p>

              <button className="mt-8 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition">
                Emergency Contacts
              </button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Send us a Message
            </h3>

            <form className="space-y-6">
              <div>
                <label className="text-slate-700 font-medium block mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-slate-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label className="text-slate-700 font-medium block mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border border-slate-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label className="text-slate-700 font-medium block mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full border border-slate-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label className="text-slate-700 font-medium block mb-2">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full border border-slate-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <iframe
              title="PalliAssist Location"
              src="https://www.google.com/maps?q=Mombasa,Kenya&output=embed"
              className="w-full h-[450px] border-0"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;