import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import AnimatedButton from "./AnimatedButton";

const navLinks = [
  { name: "About Us", path: "/about-us/the-kalyani-school" },
  { name: "Academics", path: "/academics" },
  { name: "Admissions", path: "/admissions" },
  { name: "Achievements", path: "/achievements" },
  { name: "Parents Corner", path: "/parents" },
  { name: "Alumni", path: "/alumni" },
  { name: "Contact", path: "/contact" },
];

export default function Header({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-between bg-primary text-white text-sm px-6 py-1.5">
        <div className="flex gap-4">
          <span>Affiliated to CBSE — 1130643</span>
          <span>|</span>
          <span>Linguistic Minority</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+918149117666" className="hover:underline">+91 8149 117 666</a>
          <a href="mailto:info@thekalyanischool.edu.in" className="hover:underline">
            info@thekalyanischool.edu.in
          </a>
          <a href="#" className="hover:underline">Parent Portal ↗</a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
              🎓
            </div>
            <div>
              <div className="font-semibold text-primary text-lg leading-tight">
                The Kalyani School
              </div>
              <div className="text-xs text-gray-500 tracking-wide">THE HAPPY PLACE</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-gray-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-gray-200 bg-white/90 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
            <AnimatedButton to="/enquiry" variant="accent" className="ml-2">
              Admissions Enquiry
            </AnimatedButton>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="block py-2 text-gray-700 font-medium"
              >
                {link.name}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={() => {
                toggleTheme();
                setOpen(false);
              }}
              className="w-full rounded-full border border-gray-200 bg-white px-4 py-3 text-left text-sm font-medium text-gray-700 transition-colors hover:border-primary hover:text-primary"
            >
              {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
            <AnimatedButton
              to="/enquiry"
              variant="accent"
              onClick={() => setOpen(false)}
              className="w-full justify-center"
            >
              Admissions Enquiry
            </AnimatedButton>
          </div>
        </div>
      )}
    </header>
  );
}