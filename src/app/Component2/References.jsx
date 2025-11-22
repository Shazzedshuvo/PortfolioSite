"use client";

import { motion } from "framer-motion";
import { FaUserTie, FaPhone, FaLaptopCode } from "react-icons/fa";

const References = () => {
  const references = [
    {
      name: "Department Head at BdCalling",
      role: "Web Development | M.E.R.N. | WordPress | PHP",
      phone1: "+880 1332-840808",
      phone2: "+880 1753-924093",
    },
  ];

  return (
    <section
      id="references"
      className="w-full min-h-screen bg-black text-white px-6 py-16"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-[#00bf8f] mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          REFERENCES
        </motion.h2>

        <div className="space-y-8">
          {references.map((ref, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#111111] p-6 rounded-2xl shadow-lg hover:shadow-[#00bf8f]/50 transition-all duration-300"
            >
              <h3 className="text-[#00bf8f] font-bold text-xl flex items-center gap-2">
                <FaUserTie /> {ref.name}
              </h3>
              <p className="text-gray-400 text-sm mb-2 flex items-center gap-2">
                <FaLaptopCode /> {ref.role}
              </p>
              <p className="text-gray-300 flex items-center gap-2">
                <FaPhone /> {ref.phone1}, {ref.phone2}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
