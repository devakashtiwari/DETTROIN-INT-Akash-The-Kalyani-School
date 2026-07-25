import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Achievements from "./pages/Achievements";
import ParentsCorner from "./pages/ParentsCorner";
import Alumni from "./pages/Alumni";
import Contact from "./pages/Contact";
import Enquiry from "./pages/Enquiry";
import TheKalyaniSchool from "./pages/TheKalyaniSchool";
import SiteOpeningAnimation from "./components/SiteOpeningAnimation";

export default function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <BrowserRouter>
      <SiteOpeningAnimation />
      <div className="min-h-screen flex flex-col">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/parents" element={<ParentsCorner />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/about-us/the-kalyani-school" element={<TheKalyaniSchool />} />
            <Route path="/about" element={<TheKalyaniSchool />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}