import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ShinyText from "./ShinyText";

const renderText = (text, className, baseWeight = 400) =>
  [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{
        display: "inline-block",
        fontVariationSettings: `'wght' ${baseWeight}`,
        opacity: 1,
        willChange: "transform, opacity, font-variation-settings",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const setupTextHover = (container, type) => {
  if (!container) return () => {};

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight, opacityVal, duration = 0.2) =>
    gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
      opacity: opacityVal, // Enforces true transparency
    });

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 12000);

      const calculatedWeight = min + (max - min) * intensity;
      // Hover Intensity badhne par opacity 0.25 tak drop ho jayegi (Frosted Translucent Effect)
      const calculatedOpacity = 1 - intensity * 0.75;

      animateLetter(letter, calculatedWeight, calculatedOpacity);
    });
  };

  const handleMouseLeave = () =>
    letters.forEach((letter) => animateLetter(letter, base, 1, 0.3));

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const titleCleanup = setupTextHover(titleRef.current, "title");
    const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");

    return () => {
      subtitleCleanup && subtitleCleanup();
      titleCleanup && titleCleanup();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, Welcome to my space!",
          "text-3xl font-georama",
          100
        )}
      </p>

      <h1 ref={titleRef} className="mt-7">
        {renderText("Shubham Patel", "text-8xl italic font-georama")}
      </h1>
      <br></br>
      <div>
        <ShinyText
  text="✨ I’m a Full-Stack & iOS Developer."
  speed={2.5}
  color="#ffffff" // Faint grey se bright white color
  shineColor="#93c5fd" // Soft macOS blue accent shine
  spread={120}
  direction="left"
/>
      </div>

      <div className="small-screen">
        <p>This Portfolio is designed for desktop/tablet screens only.</p>
      </div>
    </section>
  );
};

export default Welcome;