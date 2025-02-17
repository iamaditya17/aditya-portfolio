import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion"; // Import textVariant
import { styles } from "../styles"; 

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>

        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technical Skills
        </h2>
        <p className={`${styles.sectionSubText} text-center`}>
          Technologies and tools I work with
        </p>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="flex flex-col items-center bg-tertiary p-4 rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-16 h-16 mb-2 object-contain"
            />
            <p className="text-white text-[14px] font-medium">{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
