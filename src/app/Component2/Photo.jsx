"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Stars } from './Stars';

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.2, duration: 0.5, ease: "easeInOut" } }}
        className="relative"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 2, duration: 0.5, ease: "easeInOut" } }}
          className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden mix-blend-lighten shadow-[0_0_30px_#00bf8f80]"
        >
          <Image
            src="/1.png"
            fill
            priority
            quality={100}
            alt="Shazzed Shuvo"
            className="object-cover w-full h-full rounded-full"
          />
        </motion.div>

        {/* Animated Circular Border */}
        <motion.svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[370px] sm:h-[370px] lg:w-[506px] lg:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00bf8f"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [0, 360],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.svg>
      </motion.div>

    
    </div>
  );
};

export default Photo;
