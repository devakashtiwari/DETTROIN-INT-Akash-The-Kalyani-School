import { useEffect, useState } from "react";
import useInView from "../hooks/useInView";

export default function AnimatedStat({ value, label, suffix = "", duration = 1200 }) {
  const [ref, inView] = useInView({ once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const target = Number(value);
    if (Number.isNaN(target)) return;

    let startTimestamp;
    const tick = (timestamp) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(target * progress));
      if (progress < 1) {
        window.requestAnimationFrame(tick);
      }
    };

    window.requestAnimationFrame(tick);
  }, [inView, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white/95">
        {new Intl.NumberFormat("en-IN").format(count)}{suffix}
      </div>
      <div className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-white/75">
        {label}
      </div>
    </div>
  );
}
