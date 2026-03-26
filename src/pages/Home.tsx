import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Hero from "../components/Hero";
import CmaSection from "../components/CmaSection";
import GstSection from "../components/GstSection";
import LedgerSection from "../components/LedgerSection";
import PhilosophySection from "../components/PhilosophySection";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";

gsap.registerPlugin(ScrollTrigger);

// Prevent layout jumps on mobile when keyboard/address bar appears
ScrollTrigger.config({
  ignoreMobileResize: true,
});

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".panel");
    const isMobile = window.innerWidth <= 768;

    // Enable scroll normalization for smoother mobile experience
    if (isMobile) {
      ScrollTrigger.normalizeScroll(true);
    }
    
    panels.forEach((panel, index) => {
      const isLastPanel = index === panels.length - 1;

      // Skip pinning for the last panel (Contact) on mobile to avoid keyboard issues
      if (!(isMobile && isLastPanel)) {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
          scrub: true,
        });
      }

      // Fade in content for each panel as it becomes active
      const content = panel.querySelectorAll(".main-content, .huge-number");
      if (content.length > 0) {
        gsap.from(content, {
          scrollTrigger: {
            trigger: panel,
            start: "top 50%",
            toggleActions: "play reverse play reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
        });
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <main>
        <Hero />
        <CmaSection />
        <GstSection />
        <LedgerSection />
        <PhilosophySection />
        <TechStack />
        <Contact />
      </main>
    </div>
  );
}
