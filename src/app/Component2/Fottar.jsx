"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube, FaGlobe } from "react-icons/fa";

// Background Gradient Title
const GradientTitle = ({ text }) => (
  <h1
    className="
      text-[120px]          // ↓ smaller font size
      md:text-[180px]       // medium screen
      lg:text-[240px]       // large screen
      font-semibold 
      tracking-wider 
      text-center 
      p-0 
      m-0 
      bg-clip-text 
      text-transparent
      leading-none          // ↓ remove extra height
      select-none           // user can't highlight (more clean)
    "
    style={{
      backgroundImage: "linear-gradient(90deg, #8A7384 28.67%, #CAC3C3 46.17%)",
      fontFamily: "Alexandria, sans-serif",
    }}
  >
    {text}
  </h1>
);

const Footer = () => {
  const socialLinks = [
   { icon: <FaFacebookF />, href: "https://www.facebook.com/mdshazzed.hossen.98" },
    { icon: <FaGithub />, href: "https://github.com/Shazzedshuvo" },
    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/shazzedshuvo/" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/@dontworry4200" },
    { icon: <FaGlobe />, href: "https://yourwebsite.com" },
  ];

  return (
    <motion.footer
      className="w-full bg-black text-white py-16 border-t border-[#00bf8f]/30 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Title */}
      <div className="absolute w-full flex justify-center bottom-0 opacity-20 pointer-events-none">
        <GradientTitle text="Shuvo" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo / Name */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00bf8f] to-[#00f5a0]">
            Shazzed Shuvo
          </div>
          <p className="text-gray-400 text-sm max-w-xs text-center md:text-left leading-relaxed">
            “Strive for progress, not perfection.”
            <br />
            Building modern web experiences with passion, creativity, and precision. 🚀
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.4, rotate: 15, backgroundColor: "#00bf8f" }}
              whileTap={{ scale: 0.9 }}
              className="text-white w-12 h-12 flex items-center justify-center rounded-full bg-[#00bf8f]/20 shadow-lg shadow-[#00bf8f]/40 hover:shadow-[#00bf8f]/70 transition-all duration-300 text-2xl"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right mt-4 md:mt-0 text-gray-400 text-sm">
          © {new Date().getFullYear()} Shazzed Shuvo. All rights reserved.
          <br />
          Keep learning, keep building, and keep growing! 🌟
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
