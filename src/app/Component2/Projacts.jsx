"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS.",
    image: "/project1.png", // তোমার public folder এর image path
    link: "https://techlearning-website.vercel.app/",
  },
  {
    title: "E-commerce App",
    description: "Full-stack MERN e-commerce application with payment integration.",
    image: "/project2.png", // তোমার public folder এর image path
    link: "https://elatronix-store420.netlify.app/",
  },
  {
    title: "Chat App",
    description: "Real-time chat application using Next.js and Socket.io.",
    image: "/project3.png", // তোমার public folder এর image path
    link: "https://rojact-with-next-js1.vercel.app/",
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
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
