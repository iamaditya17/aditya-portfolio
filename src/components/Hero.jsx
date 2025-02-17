import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center justify-center gap-5`}
      >
        <h1 className={`${styles.heroHeadText} text-white text-center`}>
          Hi, I'm{" "}
          <span className="text-[#915EFF]">
            <Typewriter
              words={[
                "Aditya Patra",
                "Full Stack Developer",
                "Cloud and DevOps Engineer",
                "Data Analyst",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={60}
              delaySpeed={2000}
            />
          </span>
        </h1>
        <p className={`${styles.heroSubText} text-white-100 text-center mt-4`}>
          Specializing in delivering creative and efficient solutions for modern web applications, cloud infrastructure management, and data-driven insights.
        </p>
        <a
          href="/aditya_patra_resume.pdf"
          download="Aditya_Patra_Resume.pdf"
          className="px-4 py-2 border-2 border-[#915EFF] text-[#915EFF] font-semibold rounded-lg hover:bg-[#915EFF] hover:text-white transition-all"
        >
          Download Resume
        </a>
      </div>

      <div className="absolute xs:bottom-20 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
