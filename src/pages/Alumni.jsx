export default function Alumni() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-2">
          Alumni
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          A community of graduates making a difference
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Our alumni are leaders, innovators and compassionate citizens — a testament to the learning our school inspires.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "Future Leaders", description: "Graduates pursuing engineering, medicine, business and the arts." },
          { title: "Global Pathways", description: "Students studying across top universities in India and abroad." },
          { title: "Community Impact", description: "Alumni volunteering and mentoring the next generation." },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
