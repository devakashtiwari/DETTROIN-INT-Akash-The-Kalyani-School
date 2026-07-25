import AnimatedButton from "../components/AnimatedButton";

export default function Admissions() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_360px] items-start">
        <div>
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">
            Admissions
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Admissions open for the next academic year
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            Discover our programs, campus life, and admissions process. The Kalyani School offers a vibrant learning journey for young learners, guided by experienced teachers and modern facilities.
          </p>
          <ul className="space-y-4 text-gray-700">
            {[
              "Play-based early years curriculum",
              "CBSE programmes from Grade 1 to Grade XII",
              "Creative, sports and leadership opportunities",
              "Regular parent-teacher connect sessions",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Need help with admission?</h2>
          <p className="text-gray-600 mb-6">
            Speak to our admissions counsellor for fee details, eligibility, and campus visits.
          </p>
          <AnimatedButton to="/enquiry" variant="accent" icon="→" className="w-full justify-center">
            Start Your Enquiry
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
