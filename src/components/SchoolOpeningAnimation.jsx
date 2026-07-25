import AnimateOnScroll from "./AnimateOnScroll";
import AnimatedButton from "./AnimatedButton";

export default function SchoolOpeningAnimation() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.16),_transparent_45%),linear-gradient(#fffaf0,_ffffff)]">
      <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),transparent_55%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <AnimateOnScroll className="text-center mb-12">
          <p className="text-sm font-semibold text-primary tracking-[0.35em] uppercase mb-4">
            School Opening
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
            A modern Indian school welcomes your child.
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
            Celebrate the opening of our campus with a warm, contemporary Indian school animation that blends tradition, modernity and a joyful school spirit.
          </p>
        </AnimateOnScroll>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-center">
          <AnimateOnScroll animation="fade-right">
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-[0_24px_80px_rgba(13,107,92,0.08)]">
              <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.18),transparent_50%)]" />
              <div className="relative h-96 px-8 pt-10 pb-6">
                <div className="school-opening-sun absolute left-1/2 top-8 -translate-x-1/2 h-24 w-24 rounded-full bg-accent shadow-[0_0_60px_rgba(245,158,11,0.35)]" />
                <div className="school-opening-flag absolute left-1/2 top-32 -translate-x-1/2 w-[380px] rounded-[2rem] border border-primary/20 bg-gradient-to-b from-white to-[#f8fafc] shadow-xl p-6">
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div
                        key={index}
                        className="h-7 rounded-xl bg-[#f8fafc] border border-primary/10"
                      />
                    ))}
                  </div>
                  <div className="relative h-48">
                    <div className="school-opening-door-left absolute inset-y-0 left-0 w-20 rounded-br-[2rem] rounded-tl-xl bg-primary/95" />
                    <div className="school-opening-door-right absolute inset-y-0 right-0 w-20 rounded-bl-[2rem] rounded-tr-xl bg-primary/95" />
                    <div className="absolute inset-x-0 top-4 flex justify-center">
                      <div className="rounded-full bg-white px-4 py-1 text-xs uppercase tracking-[0.35em] text-primary shadow-sm">
                        Kalyani School
                      </div>
                    </div>
                    <div className="school-opening-path absolute left-1/2 bottom-4 h-24 w-64 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#dcedf4] to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left">
            <div className="rounded-3xl border border-accent/20 bg-primary/5 p-8 shadow-sm">
              <p className="text-lg font-semibold text-primary mb-4">
                Our opening story
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-3 w-3 rounded-full bg-accent" />
                  Warm Indian-inspired palette with modern school architecture.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-3 w-3 rounded-full bg-accent" />
                  Gentle motion celebrating the start of a new academic journey.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-3 w-3 rounded-full bg-accent" />
                  Bold, confident heading and elegant typography for the landing page.
                </li>
              </ul>
              <AnimatedButton to="/about-us/the-kalyani-school" variant="accent" icon="→" className="mt-8">
                Learn More About Us
              </AnimatedButton>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
