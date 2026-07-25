import { useState } from "react";
import { Link } from "react-router-dom";
import AboutSidebar from "../components/AboutSidebar";
import AnimateOnScroll from "../components/AnimateOnScroll";
import AnimatedButton from "../components/AnimatedButton";
import YouTubeSection from "../components/YouTubeSection";

const coreValues = [
  {
    title: "Individuality",
    description: "To develop a unique thought process and respect for oneself",
  },
  {
    title: "Sincerity",
    description: "To instill an honest approach towards life",
  },
  {
    title: "Dignity",
    description: "Dignity of labour and commitment towards work",
  },
  {
    title: "Equity",
    description: "Being fair and impartial to everyone",
  },
  {
    title: "Empathy",
    description: "Being considerate towards others",
  },
];

const pillars = [
  {
    label: "Our Mission",
    text: "To become a beacon of excellence in the teaching-learning process by offering an environment built on ethics and values. Providing vast, well equipped learning spaces and resources to optimise each student's potential. Continuously evolving to manage change.",
    icon: "🎯",
  },
  {
    label: "Our Vision",
    text: "To provide a harmonious, stimulating environment which inspires all to strive for excellence and emerge as responsible future ready citizens.",
    icon: "🌟",
  },
  {
    label: "Core Values",
    text: "The values we wish to inculcate guide every learner toward character, compassion, and confidence.",
    icon: "💎",
  },
];

function ExpandableText({ paragraphs }) {
  const [expanded, setExpanded] = useState(false);
  const preview = paragraphs.slice(0, 1);
  const rest = paragraphs.slice(1);

  return (
    <div>
      {(expanded ? paragraphs : preview).map((p) => (
        <p key={p.slice(0, 40)} className="text-gray-600 leading-relaxed mb-4 last:mb-0">
          {p}
        </p>
      ))}
      {rest.length > 0 && (
        <AnimatedButton
          variant="ghost"
          type="button"
          onClick={() => setExpanded(!expanded)}
          icon={expanded ? "↑" : "↓"}
          className="mt-2"
        >
          {expanded ? "Read Less" : "Read More"}
        </AnimatedButton>
      )}
    </div>
  );
}

export default function TheKalyaniSchool() {
  return (
    <div>
      {/* Hero banner */}
      <section className="relative bg-primary text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 animate-fade-in">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/90">About Us</span>
            <span>/</span>
            <span className="text-white">The Kalyani School</span>
          </nav>
          <AnimateOnScroll animation="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold">The Kalyani School</h1>
            <p className="mt-4 text-lg text-white/90 max-w-2xl">
              A decade of educational excellence — guiding mind, body, and spirit on a nine-acre
              campus in Manjri, Pune.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-14">
          <AnimateOnScroll animation="fade-right">
            <AboutSidebar />
          </AnimateOnScroll>

          <div className="space-y-14 md:space-y-20 min-w-0">
            {/* Introduction */}
            <AnimateOnScroll>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                The Kalyani School
              </h2>
              <ExpandableText
                paragraphs={[
                  "For the past decade, The Kalyani School has proudly upheld a legacy of educational excellence. Guided by the philosophy of Padmashri Mrs. Manju Bharat Ram, her daughter Mrs. Deeksha Kalyani founded the school with a vision to create a nurturing space where every child thrives.",
                  "Promoted by the Kalyani Group under the aegis of the Akutai Kalyani Charitable Trust, The Kalyani School believes in guiding the mind, body and spirit of the young generation, helping them discover and develop their unique potential.",
                  "We are a co-ed, CBSE school located in Manjri, Pune, Maharashtra, on a sprawling nine acre campus. We have been operational from the academic year 2015–16, currently with classes from Jr. K.G. to Grade XII.",
                ]}
              />
            </AnimateOnScroll>

            {/* Mission / Vision / Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((pillar, i) => (
                <AnimateOnScroll key={pillar.label} delay={i * 100} animation="fade-up">
                  <div className="h-full p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500">
                    <div className="text-3xl mb-3">{pillar.icon}</div>
                    <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-3">
                      {pillar.label}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{pillar.text}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* School Logo */}
            <AnimateOnScroll>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="aspect-square max-w-sm mx-auto md:mx-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-10 border border-gray-100">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-primary rounded-2xl flex items-center justify-center text-4xl shadow-lg animate-float">
                      🔥
                    </div>
                    <p className="text-sm font-semibold text-primary tracking-widest uppercase">
                      Akshayam Dnyanam
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    School Logo
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    The Kalyani School symbolises leadership. The school stands out for the high
                    quality of education it imparts and the curriculum and methodologies designed
                    to create future leaders.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Since time immemorial, the torch has been a symbol of leadership. The one who
                    held the torch led the way through the unknown, as a guide and leader — from
                    explorers to scholars who carried the flame of knowledge forward.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    The representation of The Kalyani School as the torch-bearers of modern
                    education is visualised in the logo.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Tagline Philosophy */}
            <AnimateOnScroll>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Tagline Philosophy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                The tagline <em className="text-primary font-medium not-italic">Akshayam Dnyanam</em>{" "}
                represents the quest for eternal knowledge that has been a hallmark of the brightest
                of humanity. This is embodied by the torch and synergises the logo and tagline.
              </p>

              <ul className="space-y-4">
                {coreValues.map((value, i) => (
                  <AnimateOnScroll key={value.title} delay={i * 80} animation="fade-left">
                    <li className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="font-semibold text-gray-900 uppercase tracking-wide text-sm">
                          {value.title}
                        </h4>
                        <p className="text-gray-600 text-sm mt-1">{value.description}</p>
                      </div>
                    </li>
                  </AnimateOnScroll>
                ))}
              </ul>
            </AnimateOnScroll>

            {/* CTA */}
            <AnimateOnScroll className="flex flex-wrap gap-4 pt-4">
              <AnimatedButton to="/enquiry" variant="accent" icon="→">
                Admissions Enquiry
              </AnimatedButton>
              <AnimatedButton to="/academics" variant="outline" icon="→">
                Explore Academics
              </AnimatedButton>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      <YouTubeSection />
    </div>
  );
}
