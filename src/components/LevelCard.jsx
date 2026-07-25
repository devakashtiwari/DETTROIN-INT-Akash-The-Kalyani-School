import AnimatedButton from "./AnimatedButton";
import AnimateOnScroll from "./AnimateOnScroll";

export default function LevelCard({
  title,
  ageRange,
  description,
  features = [],
  image,
  reverse = false,
}) {
  return (
    <AnimateOnScroll
      animation="fade-up"
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 lg:gap-12 items-center bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6 lg:p-8 hover:shadow-md transition-shadow duration-500`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2 aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2">
        <div className="text-sm font-medium text-primary mb-2">{ageRange}</div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {features.map((f) => (
            <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">
                ✓
              </span>
              {f}
            </div>
          ))}
        </div>

        <AnimatedButton to="/enquiry" variant="ghost" icon="↗">
          Enquire About This Level
        </AnimatedButton>
      </div>
    </AnimateOnScroll>
  );
}