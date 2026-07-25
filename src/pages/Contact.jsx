import AnimatedButton from "../components/AnimatedButton";

export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_360px] items-start">
        <div>
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's connect with our school community
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            Reach out for admissions, campus visits, partnerships or any questions about life at The Kalyani School.
          </p>
          <div className="space-y-4 text-gray-700">
            <div>
              <div className="text-sm font-semibold text-gray-900">Phone</div>
              <div>+91 8149 117 666</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Email</div>
              <div>info@thekalyanischool.edu.in</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Address</div>
              <div>Manjri, Pune, Maharashtra, India</div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Send us a message</h2>
          <p className="text-gray-600 mb-6">
            Our team will be glad to help with your enquiry and schedule a campus visit.
          </p>
          <AnimatedButton to="/enquiry" variant="accent" icon="→" className="w-full justify-center">
            Enquiry Form
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
