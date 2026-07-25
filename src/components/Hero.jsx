import AnimatedButton from "./AnimatedButton";
import AnimatedStat from "./AnimatedStat";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-teal-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="max-w-2xl">
          <AnimateOnScroll animation="fade-up">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm px-4 py-1.5 rounded-full mb-6">
              <span>✨</span>
              <span>QS I-GAUGE Diamond+ — Ranked #1 CBSE School in Pune</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
              Welcome to{" "}
              <span className="text-accent">The Happy Place</span>
            </h1>

            <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl">
              At The Kalyani School, happiness is at the heart of learning. An environment where every
              child feels valued, every parent feels heard, and every teacher feels inspired.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <AnimatedButton to="/enquiry" variant="accent" icon="→">
                Admissions Enquiry
              </AnimatedButton>
              <AnimatedButton to="/about-us/the-kalyani-school" variant="outline-light" icon="→">
                Explore The School
              </AnimatedButton>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={200} className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white">
            {[
              { value: 2400, suffix: "+", label: "Happy Students" },
              { value: 180, suffix: "+", label: "Expert Faculty" },
              { value: 9, suffix: " Acre", label: "Acre Campus" },
              { value: 10, suffix: "+", label: "Years of Excellence" },
            ].map((stat) => (
              <AnimatedStat key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
