"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "bdcalling academy",
    duration: "Jun 2025 - Present",
    description: "Developed responsive web applications using React, Next.js, and Tailwind CSS. Optimized UI/UX for better user engagement and performance.",
  },
  {
    role: "MERN Stack Developer",
    company: "bdcalling academy.",
    duration: "Jun 2025 - Dec 2025 Present",
    description: "Built full-stack applications using MongoDB, Express.js, React, and Node.js. Implemented REST APIs and user authentication.",
  },
  {
    role: "Intern",
    company: "bdcalling academy",
    duration: "Jun 2024 - des 2024",
    description: "Assisted in building web projects and improving UI/UX design. Gained hands-on experience with modern web technologies.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-black text-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#00bf8f] text-center mb-12">
          My Experience
        </h2>

        {/* Timeline container */}
        <div className="relative border-l-2 border-[#00bf8f]/50 ml-4 md:ml-10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <span className="absolute -left-5 top-3 w-4 h-4 rounded-full bg-[#00bf8f] border-2 border-black"></span>

              <h3 className="text-xl md:text-2xl font-bold text-[#00bf8f]">{exp.role}</h3>
              <p className="text-gray-400 text-sm mb-2">{exp.company} | {exp.duration}</p>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
