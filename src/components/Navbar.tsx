import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  const navLinks = [
    {
      title: "Home",
      to: "home",
    },
    {
      title: "About",
      to: "about",
    },
    {
      title: "Services",
      to: "services",
    },
    {
      title: "Contact",
      to: "contact",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <img
            src="/image/logo1.png"
            alt="PalliAssist"
            className="w-12 h-12 object-contain"
          />

          <span className="text-2xl font-bold text-blue-700">
            PalliAssist
          </span>

        </div>

        {/* Desktop Menu */}

        <div className="hidden lg:flex items-center gap-10">

          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={700}
              offset={-80}
              className="cursor-pointer text-gray-700 hover:text-blue-700 transition font-medium"
            >
              {link.title}
            </ScrollLink>
          ))}

        </div>

        {/* Desktop Buttons */}

        <div className="hidden lg:flex gap-4">

          <Link to="/login">
            <button className="px-5 py-2 border border-blue-600 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition">
              Get Started
            </button>
          </Link>

        </div>

        {/* Mobile */}

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden"
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}

      {mobileMenu && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white shadow-lg lg:hidden"
        >
          <div className="flex flex-col gap-6 p-8">

            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={700}
                offset={-80}
                onClick={() => setMobileMenu(false)}
                className="cursor-pointer text-lg"
              >
                {link.title}
              </ScrollLink>
            ))}

            <Link to="/login">
              Login
            </Link>

            <Link to="/signup">
              Get Started
            </Link>

          </div>

        </motion.div>

      )}
    </motion.nav>
  );
}