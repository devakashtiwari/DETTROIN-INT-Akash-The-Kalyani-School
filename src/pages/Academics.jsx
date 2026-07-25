import LevelCard from "../components/LevelCard";

export default function Academics() {
  return (
    <div>
      {/* Hero banner */}
      <section className="relative bg-primary text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-37559779245d?w=1600')] bg-cover bg-center opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold tracking-wide uppercase mb-3 opacity-90">
            Academics
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">
            A curriculum that{" "}
            <span className="text-accent">nurtures thinkers.</span>
          </h1>
          <p className="mt-5 text-lg text-white/90 max-w-2xl mx-auto">
            From play-based pre-primary to university-ready senior school — our CBSE
            curriculum is enriched with inquiry, arts and global exposure.
          </p>
        </div>
      </section>

      {/* Levels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 space-y-12">
        <LevelCard
          title="Pre-Primary School"
          ageRange="Nursery – Sr. KG  |  Ages 3–5"
          description="A play-based, inquiry-led early years programme that nurtures curiosity, language, motor skills and social confidence."
          features={["Play-based learning", "Storytelling & phonics", "Sensorial exploration", "Free play zones"]}
          image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800"
        />
        <LevelCard
          title="Primary School"
          ageRange="Grades I – V  |  Ages 6–10"
          description="Foundational literacy, numeracy and inquiry-based learning that builds strong academic and life skills."
          features={["CBSE curriculum", "Reading programme", "STEAM projects", "Life-skills weekly"]}
          image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800"
          reverse
        />
        {/* You can add Middle & Senior School cards the same way */}
      </section>
    </div>
  );
}