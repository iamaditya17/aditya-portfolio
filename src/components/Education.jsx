import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { educationData } from "../constants";
import { styles } from "../styles";


const Education = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionHeadText} text-center`}>Education</h2>
                <p className={`${styles.sectionSubText} text-center`}>My Academic Background</p>

            </motion.div>
            <div className="flex flex-col gap-8 mt-10">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
                        className="bg-tertiary p-6 rounded-lg shadow-lg"
                    >
                        <h3 className="text-white text-[22px] font-bold">{edu.degree}</h3>
                        <p className="text-[#915EFF] text-[18px] font-medium">{edu.institution}</p>
                        <p className="text-secondary text-[16px] mt-2">{edu.year}</p>
                        <ul className="list-disc list-inside text-secondary text-[14px] mt-2">
                            {edu.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Education, "education");
