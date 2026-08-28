import { useEffect, useState } from "react";
import "./orbit-loader.css";

const EXIT_AFTER_MS = 3600;
const REMOVE_AFTER_MS = 4300;

export function OrbitLoader() {
  const [leaving, setLeaving] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setLeaving(true), EXIT_AFTER_MS);
    const removeTimer = window.setTimeout(() => setRemoved(true), REMOVE_AFTER_MS);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div className={`orbit-loader${leaving ? " orbit-loader-leaving" : ""}`} aria-hidden="true">
      <div className="orbit-loader-scene">
        <div className="orbit-loader-core">
          <span className="orbit-loader-core-inner" />
        </div>

        <div className="orbit-loader-ring orbit-loader-ring-a">
          <span className="orbit-loader-particle orbit-loader-particle-a" />
        </div>
        <div className="orbit-loader-ring orbit-loader-ring-b">
          <span className="orbit-loader-particle orbit-loader-particle-b" />
        </div>
        <div className="orbit-loader-ring orbit-loader-ring-c">
          <span className="orbit-loader-particle orbit-loader-particle-c" />
        </div>

        <div className="orbit-loader-crosshair orbit-loader-crosshair-x" />
        <div className="orbit-loader-crosshair orbit-loader-crosshair-y" />
      </div>

      <div className="orbit-loader-meta">
        <span>LB / 001</span>
        <span className="orbit-loader-meta-line" />
        <span>INITIALIZING</span>
      </div>
    </div>
  );
}
