"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "TechLearning Portfolio",
    description:
      "A modern and responsive developer portfolio built using Next.js, React, and Tailwind CSS. Includes smooth animations, optimized performance, and a clean UI.",
    image: "/333.jpg",
    link: "https://techlearning-website.vercel.app/",
  },
  {
    title: "ElectroShop E-Commerce",
    description:
      "A full-stack MERN e-commerce platform offering product filtering, shopping cart, user authentication, and secure payment integration.",
    image: "/111.jpg",
    link: "https://elatronix-store420.netlify.app/",
  },
  {
    title: "Furniture Shop Website",
    description:
      "A beautifully designed and responsive furniture store built with Next.js. Features modern UI, smooth animations, and great user experience.",
    image: "/222.jpg",
    link: "https://rojact-with-next-js1.vercel.app/",
  },
  {
    title: "Shuvo Portfolio",
    description:
      "A polished personal portfolio showcasing skills, experience, and completed projects—developed with Next.js, Tailwind CSS, and Framer Motion.",
    image: "/shuvo.jpg",
    link: "https://portfolio-site-beryl-phi.vercel.app/",
  },
  {
    title: "Shuvo Portfolio",
    description:
      "A polished personal portfolio showcasing skills, experience, and completed projects—developed with Next.js, Tailwind CSS, and Framer Motion.",
    image: "/shuvo.jpg",
    link: "https://portfolio-site-beryl-phi.vercel.app/",
  },
  {
    title: "Shuvo Portfolio",
    description:
      "A polished personal portfolio showcasing skills, experience, and completed projects—developed with Next.js, Tailwind CSS, and Framer Motion.",
    image: "/shuvo.jpg",
    link: "https://portfolio-site-beryl-phi.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#00bf8f]">My Projects</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111111] rounded-2xl overflow-hidden shadow-lg hover:shadow-[#00bf8f]/50 transition-all duration-300"

            /** 👇 তোমার original motion animations — untouched */
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 md:h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#00bf8f] mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
