"use client";

import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaMapMarkerAlt, FaGraduationCap, FaLaptopCode, FaServer } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-black text-white flex items-center justify-center px-6 py-16"
    >
      <motion.div
        className="max-w-5xl w-full space-y-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#00bf8f] text-center">
          About Me 
        </h2>
        <p className="text-gray-300 text-center">Full-Stack Next.js Developer (Front-End Focused)</p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-300 text-lg text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <HiOutlinePhone className="text-[#00bf8f] text-2xl" /> +880 1719 052 334
          </div>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <FaMapMarkerAlt className="text-[#00bf8f] text-2xl" /> Tetulia, Panchagarh
          </div>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <HiOutlineMail className="text-[#00bf8f] text-2xl" /> shazzedshuvo@gmail.com 
          </div>
        </div>

        {/* Education */}
        <div className="grid sm:grid-cols-2 gap-6 text-gray-300">
          <div className="flex items-start gap-3">
            <FaGraduationCap className="text-[#00bf8f] text-3xl mt-1" />
            <div>
              <h3 className="font-semibold">Thakurgaon Polytechnic Institute</h3>
              <p>Diploma in Engineering (2020 - 2024)</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaGraduationCap className="text-[#00bf8f] text-3xl mt-1" />
            <div>
              <h3 className="font-semibold">Panchagarh Tacnical School and college </h3>
              <p>SSC(2018 - 2020)</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaGraduationCap className="text-[#00bf8f] text-3xl mt-1" />
            <div>
              <h3 className="font-semibold"> Uttara University </h3>
              <p>B.S.C in computer science  Dec 2025 Present</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#00bf8f]">Frontend Skills</h3>
          <div className="grid sm:grid-cols-2 gap-2 text-gray-300">
            {["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "Shadcn/UI"].map((skill, idx) => (
              <p key={idx} className="flex items-center gap-2">
                <FaLaptopCode className="text-[#00bf8f]" /> {skill}
              </p>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-[#00bf8f] mt-4">Backend Skills</h3>
          <div className="grid sm:grid-cols-2 gap-2 text-gray-300">
            {["Node.js", "Next.js API Routes", "MongoDB & Mongoose", "JWT Authentication", "Bcrypt.js"].map((skill, idx) => (
              <p key={idx} className="flex items-center gap-2">
                <FaServer className="text-[#00bf8f]" /> {skill}
              </p>
            ))}
          </div>
        </div>

        {/* About Me */}
        <div>
          <h3 className="text-2xl font-bold text-[#00bf8f] mb-2">About Me</h3>
          <p className="text-gray-300">
            I am a Front-End Developer skilled in Next.js, React, TypeScript, and Tailwind CSS, with strong experience in REST API integration and MongoDB. I build fast, responsive, and scalable web applications with modern UI/UX and clean code.
          </p>
        </div>

        {/* Profiles */}
        <div>
          <h3 className="text-2xl font-bold text-[#00bf8f] mb-2">Profiles</h3>
          <p className="text-gray-300">
            GitHub: <a href="https://github.com/Shazzedshuvo" className="text-[#1cd8d2] hover:underline">https://github.com/Shazzedshuvo</a>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
