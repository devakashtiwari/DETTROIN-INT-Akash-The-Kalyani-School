import { Link, useLocation } from "react-router-dom";

const aboutLinks = [
  { name: "The Kalyani School", path: "/about-us/the-kalyani-school" },
  { name: "Legacy", path: "/about-us/legacy" },
  { name: "Message From The Director-Trustee", path: "/about-us/director-trustee" },
  { name: "Message From The Director-Principal", path: "/about-us/director-principal" },
  { name: "Message by Headmistress Sr School", path: "/about-us/headmistress-sr" },
  { name: "Message by Headmistress Jr School", path: "/about-us/headmistress-jr" },
  { name: "Facilities", path: "/about-us/facilities" },
  { name: "Associations", path: "/about-us/associations" },
  { name: "Academic Collaborations", path: "/about-us/collaborations" },
  { name: "Committees", path: "/about-us/committees" },
  { name: "Our Faculty", path: "/about-us/faculty" },
  { name: "FAQ's", path: "/about-us/faq" },
];

export default function AboutSidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="lg:sticky lg:top-28 h-fit">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 bg-primary text-white">
          <h2 className="font-semibold text-lg">About Us</h2>
        </div>
        <nav className="p-2">
          <ul className="space-y-0.5">
            {aboutLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-2.5 text-sm rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-primary/10 text-primary font-semibold translate-x-1"
                        : "text-gray-600 hover:bg-gray-50 hover:text-primary hover:translate-x-1"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
