import { useEffect, useState } from "react";
import "./BootScreen.css";

export default function BootScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    const endTimer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(endTimer);
    };
  }, [onFinish]);

  return (
    <div className={`boot-screen ${fadeOut ? "fade-out" : ""}`}>
    <img
        src={`${import.meta.env.BASE_URL}apple-logo.png`}
        className="apple-logo"
        alt="Apple logo"
      />
      <div className="loading-bar">
        <div className="loading-progress" />
      </div>
    </div>
  );
}
