import { useEffect, useState } from "react";

// Plain CSS classes defined in styles.css — NOT styled-components.
// styled-components injects its CSS via JS after the page loads, so on the
// very first paint (especially with server-side rendering) this component
// would exist in the DOM with zero styling applied for a moment: no
// `position: fixed`, no background. The real page shows through underneath
// until the CSS shows up a beat later — that's the "homepage glimpse" and
// the beam/text appearing "late" on localhost. A real <link>-based
// stylesheet is guaranteed ready before first paint, so that race is gone.
export const OrbitLoader = () => {
  const [phase, setPhase] = useState<"visible" | "leaving" | "gone">("visible");

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const MIN_VISIBLE_MS = 1400;
    const start = Date.now();
    const finishLoading = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(MIN_VISIBLE_MS - elapsed, 0);
      window.setTimeout(() => setPhase("leaving"), remaining);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    // Safety net: never hold the loader forever if "load" never fires.
    const maxTimer = window.setTimeout(() => setPhase("leaving"), 5000);

    return () => {
      window.removeEventListener("load", finishLoading);
      window.clearTimeout(maxTimer);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    if (phase !== "leaving") return;
    document.body.style.overflow = "";
    const timer = window.setTimeout(() => setPhase("gone"), 500);
    return () => window.clearTimeout(timer);
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div className={`loader-screen ${phase === "leaving" ? "loader-screen-leaving" : ""}`} aria-hidden="true">
      <div className="loader-wrapper">
        <div className="loader" />
        <div className="loader-content">
          <span className="loader-text">INITIALIZING</span>
        </div>
      </div>
    </div>
  );
};
