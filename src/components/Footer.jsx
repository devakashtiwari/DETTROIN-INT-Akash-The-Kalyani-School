import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-semibold text-xl mb-2">The Kalyani School</div>
            <p className="text-sm text-white/80">THE HAPPY PLACE</p>
            <p className="mt-4 text-sm text-white/70">
              A school that every child, parent, and teacher loves.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/academics" className="hover:text-white transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="/achievements" className="hover:text-white transition-colors">Achievements</Link></li>
              <li><Link to="/parents" className="hover:text-white transition-colors">Parents Corner</Link></li>
              <li><Link to="/alumni" className="hover:text-white transition-colors">Alumni</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="tel:+918149117666" className="hover:text-white transition-colors">+91 8149 117 666</a></li>
              <li><a href="mailto:info@thekalyanischool.edu.in" className="hover:text-white transition-colors">info@thekalyanischool.edu.in</a></li>
              <li>Pune, Maharashtra</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-3">
              <a href="https://www.youtube.com/@TheKalyaniSchool-rs5ix" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="YouTube">▶</a>
              <a href="https://www.facebook.com/KalyaniSchool/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook">f</a>
              <a href="https://www.instagram.com/kalyanischool/?hl=en" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Instagram">ig</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} The Kalyani School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
