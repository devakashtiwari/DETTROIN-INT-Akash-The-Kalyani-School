import useInView from "../hooks/useInView";

export default function AnimateOnScroll({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  as: Tag = "div",
}) {
  const [ref, inView] = useInView({ once: true });

  return (
    <Tag
      ref={ref}
      className={`animate-on-scroll animate-${animation} ${inView ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
