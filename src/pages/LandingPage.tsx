import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function LandingPage() {
  return (
    <>
      <Navbar />

      <Hero />

      <section
        id="about"
        className="h-screen flex items-center justify-center"
      >
        ABOUT SECTION
      </section>

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