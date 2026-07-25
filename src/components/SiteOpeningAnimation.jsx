import { useEffect, useState } from "react";

export default function SiteOpeningAnimation() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setFadeOut(true), 1200);
    const hideTimer = window.setTimeout(() => setVisible(false), 1600);
    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-primary text-white transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center gap-6 px-5 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/15 shadow-[0_0_40px_rgba(255,255,255,0.2)] animate-float text-3xl">
          🎓
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-white/70 mb-2">Welcome to</p>
          <h1 className="text-3xl sm:text-4xl font-black leading-tight">The Kalyani School</h1>
          <p className="mt-3 max-w-xl text-sm text-white/75 sm:text-base">
            A joyful, modern Indian school experience — where every child starts their day with purpose and pride.
          </p>
        </div>
      </div>
    </div>
  );
}
