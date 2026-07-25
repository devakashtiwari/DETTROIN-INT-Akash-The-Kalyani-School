import EnquiryForm from "../components/EnquiryForm";

export default function Enquiry() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left content */}
        <div>
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">
            Enquiry
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in touch
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            Fill this quick form and our admissions team will reach out with next
            steps, fee structure and a campus-visit invitation.
          </p>

          <ul className="space-y-4">
            {[
              "Response within 48 hours",
              "Complimentary campus tour",
              "Meet current teachers & parents",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-700">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <EnquiryForm />
      </div>
    </section>
  );
}