import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";

export default function LandingPage() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <section
        id="services"
        className="h-screen flex items-center justify-center bg-slate-50"
      >
        SERVICES SECTION
      </section>

      <section
        id="contact"
        className="h-screen flex items-center justify-center"
      >
        CONTACT SECTION
      </section>
    </>
  );
}