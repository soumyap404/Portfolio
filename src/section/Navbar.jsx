import { useState } from "react";
import { motion } from "motion/react";

const Navigation = ({ onNavigate, onScrollToSection }) => {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a
          className="nav-link"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate();
            onScrollToSection("home");
          }}
        >
          Home
        </a>
      </li>
      <li className="nav-li">
        <a
          className="nav-link"
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            onNavigate();
            onScrollToSection("about");
          }}
        >
          About
        </a>
      </li>
      <li className="nav-li">
        <a
          className="nav-link"
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            onNavigate();
            onScrollToSection("work");
          }}
        >
          Work
        </a>
      </li>
      <li className="nav-li">
        <a
          className="nav-link"
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            onNavigate();
            onScrollToSection("contact");
          }}
        >
          Contact
        </a>
      </li>
    </ul>
  );
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToSection = (sectionId) => {
    if (typeof window === "undefined") return;

    const section = document.getElementById(sectionId);
    if (!section) return;

    const headerOffset = 88;
    const startY = window.scrollY;
    const targetY = section.getBoundingClientRect().top + startY - headerOffset;
    const duration = 900;
    const startTime = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentY = startY + (targetY - startY) * easedProgress;

      window.scrollTo(0, currentY);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-20 w-full backdrop-blur-lg bg-black/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          <a
            href="/"
            className="text-xl font-bold text-neutral-400 transition-colors hover:text-white"
          >
            SOUMYA PRAMANIK
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="h-6 w-6"
              alt="toggle menu"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation
              onNavigate={() => setIsOpen(false)}
              onScrollToSection={handleScrollToSection}
            />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <nav className="pb-5">
            <Navigation
              onNavigate={() => setIsOpen(false)}
              onScrollToSection={handleScrollToSection}
            />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
