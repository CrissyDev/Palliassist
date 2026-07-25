import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function Login() {
  return <h1 className="text-5xl text-center mt-20">Login Page</h1>;
}

function Signup() {
  return <h1 className="text-5xl text-center mt-20">Signup Page</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}