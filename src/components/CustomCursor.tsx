import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [cursorColor, setCursorColor] = useState("#00ff66"); // Default green
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      // Center the dot (8x8)
      gsap.to(cursorRef.current, {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0,
      });
      // Center the follower (40x40)
      gsap.to(followerRef.current, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.3,
      });

      // Detect background color
      const element = document.elementFromPoint(e.clientX, e.clientY);
      const panel = element?.closest(".panel");
      
      if (panel) {
        if (panel.classList.contains("panel-light")) {
          setCursorColor("#000000"); // Black on white
        } else if (panel.classList.contains("panel-accent")) {
          setCursorColor("#000000"); // Black on green
        } else {
          setCursorColor("#00ff66"); // Green on black
        }
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={cursorRef}
        style={{ backgroundColor: cursorColor, willChange: "transform" }}
        className="fixed w-2 h-2 rounded-full z-[10000] pointer-events-none transition-colors duration-300"
      />
      <div
        ref={followerRef}
        style={{ willChange: "transform" }}
        className="fixed w-10 h-10 border border-white/30 rounded-full z-[10000] pointer-events-none mix-blend-difference"
      />
    </>
  );
}
