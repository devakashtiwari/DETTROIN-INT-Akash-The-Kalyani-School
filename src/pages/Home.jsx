import Hero from "../components/Hero";
import LevelCard from "../components/LevelCard";
import AnimatedButton from "../components/AnimatedButton";
import AnimateOnScroll from "../components/AnimateOnScroll";
import YouTubeSection from "../components/YouTubeSection";
import SchoolOpeningAnimation from "../components/SchoolOpeningAnimation";

export default function Home() {
  return (
    <>
      <Hero />
      <SchoolOpeningAnimation />
      <YouTubeSection
        label="Introduction"
        title="Watch Our School Introduction"
        subtitle="A warm welcome to The Kalyani School — our values, campus and modern Indian learning experience in one short video."
      />

      {/* Academics teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <AnimateOnScroll className="text-center mb-12">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-2">
            Academics
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            A curriculum that{" "}
            <span className="text-accent">nurtures thinkers.</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From play-based pre-primary to university-ready senior school — our CBSE
            curriculum is enriched with inquiry, arts and global exposure.
          </p>
        </AnimateOnScroll>

        <div className="space-y-10">
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
        </div>

        <AnimateOnScroll className="text-center mt-12">
          <AnimatedButton to="/academics" variant="outline" icon="→">
            View All Levels
          </AnimatedButton>
        </AnimateOnScroll>
      </section>
    </>
  );
}