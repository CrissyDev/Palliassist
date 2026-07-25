import Navbar from "../components/Navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />

      <section
        id="home"
        className="h-screen flex items-center justify-center bg-slate-50"
      >
        <h1 className="text-6xl font-bold">HOME</h1>
      </section>

      <section
        id="about"
        className="h-screen flex items-center justify-center bg-white"
      >
        <h1 className="text-6xl font-bold">ABOUT</h1>
      </section>

      <section
        id="services"
        className="h-screen flex items-center justify-center bg-slate-50"
      >
        <h1 className="text-6xl font-bold">SERVICES</h1>
      </section>

      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-white"
      >
        <h1 className="text-6xl font-bold">CONTACT</h1>
      </section>
    </>
  );
}