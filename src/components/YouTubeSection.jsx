import AnimatedButton from "./AnimatedButton";
import AnimateOnScroll from "./AnimateOnScroll";

const YOUTUBE_CHANNEL_ID = "UCnaGgniGO3djD8gfA4jMcTA";
const YOUTUBE_HANDLE = "@TheKalyaniSchool-rs5ix";
const UPLOADS_PLAYLIST = `UU${YOUTUBE_CHANNEL_ID.slice(2)}`;

export default function YouTubeSection({
  label = "Campus Life",
  title = "Watch The Kalyani School",
  subtitle = "Explore assemblies, student stories, and moments from our community on YouTube.",
  videoId,
}) {
  const videoSrc = videoId
    ? `https://www.youtube.com/embed/${videoId}?rel=0`
    : `https://www.youtube.com/embed/videoseries?list=${UPLOADS_PLAYLIST}&rel=0`;

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll className="text-center mb-10">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-2">
            {label}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            {title}
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-in" delay={120}>
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-black aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={videoSrc}
              title="The Kalyani School Introduction Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="flex flex-wrap justify-center gap-4 mt-8" delay={200}>
          <AnimatedButton
            href={`https://www.youtube.com/${YOUTUBE_HANDLE}`}
            variant="accent"
            icon="↗"
          >
            Visit Our Channel
          </AnimatedButton>
          <AnimatedButton
            href={`https://www.youtube.com/${YOUTUBE_HANDLE}?sub_confirmation=1`}
            variant="outline"
            icon="▶"
          >
            Subscribe on YouTube
          </AnimatedButton>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
