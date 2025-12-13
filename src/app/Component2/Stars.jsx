"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaProjectDiagram,
  FaTools,
  FaCode,
} from "react-icons/fa";

export const Stars = () => {
  const stats = [
    {
      value: "2+",
      label: "Years of Experience",
      icon: <FaBriefcase />,
    },
    {
      value: "8+",
      label: "Projects Completed",
      icon: <FaProjectDiagram />,
    },
    {
      value: "10+",
      label: "Technologies Mastered",
      icon: <FaTools />,
    },
    {
      value: "500+",
      label: "Code Commits",
      icon: <FaCode />,
    },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.12 }}
              className="relative bg-[#111111] p-6 rounded-xl shadow-lg hover:shadow-[#00bf8f]/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-3xl mb-3 flex justify-center text-[#00bf8f] opacity-80">
                {stat.icon}
              </div>

              {/* Number */}
              <h3 className="text-4xl md:text-5xl font-bold text-[#00bf8f]">
                {stat.value}
              </h3>

              {/* Label */}
              <p className="mt-2 text-sm md:text-base text-gray-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
