import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Contact() {
  const triggerRef = useRef<HTMLHeadingElement>(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  useGSAP(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = trigger.getBoundingClientRect();
      const x = (e.clientX - (left + width / 2)) * 0.4;
      const y = (e.clientY - (top + height / 2)) * 0.4;
      gsap.to(trigger, { x, y, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(trigger, { x: 0, y: 0, duration: 0.3 });
    };

    trigger.addEventListener("mousemove", handleMouseMove);
    trigger.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      trigger.removeEventListener("mousemove", handleMouseMove);
      trigger.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, { scope: triggerRef });

  const handleFocus = () => {
    // Disable ScrollTrigger refreshes while typing to prevent keyboard jumps
    ScrollTrigger.getAll().forEach(st => st.disable(false));
  };

  const handleBlur = () => {
    // Re-enable ScrollTrigger after typing
    ScrollTrigger.getAll().forEach(st => st.enable());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Explicitly blur the active element to dismiss keyboard cleanly
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    
    const phoneNumber = "919309831088";
    const text = `New Inquiry from Portfolio\n\nName: ${formState.name}\nEmail: ${formState.email}\nMessage: ${formState.message}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    // Small delay to ensure the keyboard is fully dismissed before redirecting
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setFormState({ name: "", email: "", message: "" });
    }, 100);
  };

  return (
    <section className="panel panel-accent !h-auto min-h-screen py-20">
      <div className="max-w-[90%] md:max-w-[80%] px-[5vw] md:px-[10vw] main-content w-full">
        <div className="text-center mb-12">
          <h2 
            ref={triggerRef}
            className="font-display text-[12vw] md:text-[7vw] uppercase leading-none mb-5 cursor-pointer inline-block"
          >
            LET'S WORK
          </h2>
          <div className="w-full h-px bg-black my-5 opacity-20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-[10px] tracking-widest mb-2">EMAIL</h3>
              <p className="font-bold text-lg md:text-xl">rautsahil179@gmail.com</p>
            </div>
            <div>
              <h3 className="font-display text-[10px] tracking-widest mb-2">PHONE</h3>
              <p className="font-bold text-lg md:text-xl">+91 9309831088</p>
            </div>
            <div>
              <h3 className="font-display text-[10px] tracking-widest mb-2">LOCATION</h3>
              <p className="font-bold text-lg md:text-xl">MAHARASHTRA, INDIA</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
              <input 
                type="text" 
                placeholder="NAME"
                required
                value={formState.name}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full bg-transparent border-b-2 border-black/20 py-4 font-display text-[10px] focus:border-black outline-none transition-colors placeholder:text-black/30"
              />
            </div>
            <div className="group">
              <input 
                type="email" 
                placeholder="EMAIL"
                required
                value={formState.email}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full bg-transparent border-b-2 border-black/20 py-4 font-display text-[10px] focus:border-black outline-none transition-colors placeholder:text-black/30"
              />
            </div>
            <div className="group">
              <textarea 
                placeholder="MESSAGE"
                rows={4}
                required
                value={formState.message}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-transparent border-b-2 border-black/20 py-4 font-display text-[10px] focus:border-black outline-none transition-colors placeholder:text-black/30 resize-none"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-black text-white font-display py-6 text-[10px] tracking-widest hover:bg-white hover:text-black border-2 border-black transition-all duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
