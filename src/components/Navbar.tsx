import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (path: string, index?: number) => {
    if (location.pathname === "/" && index !== undefined) {
      const panels = document.querySelectorAll(".panel");
      if (panels[index]) {
        panels[index].scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="fixed top-4 md:top-8 w-full px-6 md:px-10 flex justify-between items-center z-[1000] font-display text-[8px] md:text-[10px] tracking-[2px] md:tracking-[5px] mix-blend-difference">
      <div className="flex-1 cursor-pointer ml-4 md:ml-[15vw]" onClick={() => handleNavClick("/", 0)}>SYSTEMS ARCHITECT</div>
      
      <div className="hidden md:flex gap-8 flex-1 justify-center">
        <button onClick={() => handleNavClick("/", 0)} className="hover:text-accent transition-colors cursor-pointer">HOME</button>
        <button onClick={() => handleNavClick("/services", 2)} className="hover:text-accent transition-colors cursor-pointer">SERVICES</button>
        <button onClick={() => handleNavClick("/about", 4)} className="hover:text-accent transition-colors cursor-pointer">ABOUT</button>
        <button onClick={() => handleNavClick("/contact", 6)} className="hover:text-accent transition-colors cursor-pointer">CONTACT</button>
      </div>

      <div className="flex-1 text-right text-accent mr-4 md:mr-[15vw]">SAHIL PRASHANT RAUT</div>
    </nav>
  );
}
