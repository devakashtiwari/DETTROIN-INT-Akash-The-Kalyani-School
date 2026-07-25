export default function Achievements() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-2">
          Achievements
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Celebrating student success and school milestones
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          From academic excellence to sporting glory, our students shine with confidence, creativity, and character.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "National Awards", description: "CBSE toppers and national-level competition winners." },
          { title: "Sports Champions", description: "State and district champions across athletics, football and cricket." },
          { title: "Creative Excellence", description: "Art, music and coding achievements from every grade." },
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
