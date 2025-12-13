"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const navitems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About ME" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact Us" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const resumeButton = (
    <motion.a
      href="/cv2.pdf"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, backgroundColor: "#00bf8f", color: "#000" }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-2 border-2 border-[#00bf8f] text-[#00bf8f] font-semibold rounded-full transition-colors duration-300 flex items-center gap-2 justify-center"
    >
      <FaUser /> My Resume
    </motion.a>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md py-4 px-6">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold text-[#00bf8f]">Shazzed</h1>

        {/* Desktop */}
        <div className="hidden md:flex gap-6 items-center">
          {navitems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              whileHover={{ scale: 1.1, color: "#00bf8f" }}
              className="relative font-semibold text-white text-lg transition-all duration-300"
            >
              {item.label}
              {/* Underline effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#00bf8f] transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
          ))}
          {resumeButton}
        </div>

        {/* Mobile */}
        <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-black/90 text-center py-6 space-y-6">
          {navitems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-white hover:text-[#00bf8f] font-semibold text-lg"
            >
              {item.label}
            </button>
          ))}
          <div className="flex justify-center">{resumeButton}</div>
        </div>
      )}
    </header>
  );
}
