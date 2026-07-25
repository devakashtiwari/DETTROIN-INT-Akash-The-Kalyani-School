import AnimatedButton from "../components/AnimatedButton";

export default function ParentsCorner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
        <div>
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">
            Parents Corner
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Information, support and connection for families
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            Stay updated on school events, academic calendars and resources designed to support your child’s learning and well-being.
          </p>
          <ul className="space-y-4 text-gray-700">
            {[
              "Parent-Teacher Connects",
              "Counselling and student support",
              "Academic progress reports",
              "Workshops for family engagement",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Looking for updates?</h2>
          <p className="text-gray-600 mb-6">
            Our parent portal and school newsletter keep you informed every step of the way.
          </p>
          <AnimatedButton to="/contact" variant="accent" icon="→" className="w-full justify-center">
            Contact Admissions
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
