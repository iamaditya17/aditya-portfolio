import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import profilePic from "../assets/Profile_photo/aditya-profile-pic-portfolio.jpg"; // Path to your profile photo

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col md:flex-row items-center gap-10">

        <div>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </div>


      </motion.div>

      <motion.div className="flex flex-col md:flex-row items-center gap-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-2xl leading-[30px] flex-1"
        >
          Skilled Software Engineer with expertise in TypeScript, JavaScript, React.js, Node.js, and Express.js, specializing in full-stack development, cloud infrastructure management, and data analytics. Proficient in designing scalable web applications, optimizing CI/CD pipelines, and implementing ERP and banking solutions. Experienced in SQL, PostgreSQL, MongoDB, and ORM tools like Sequelize, with hands-on work in cloud platforms like AWS, Azure. Strong background in data analysis and visualization using OBIEE, Power BI, Oracle Data Integrator, and BI tools, enabling data-driven decision-making for business operations. Passionate about building efficient, secure, and user-centric applications that drive business growth.
        </motion.p>

        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className="w-[350px] h-[350px] rounded-2xl overflow-hidden border-4 border-[#915EFF] shadow-lg"
        >
          <img src={profilePic} alt="Profile" className="w-full h-half object-cover object-center" />
        </motion.div>
      </motion.div>
      
      <div className='mt-20 flex flex-wrap gap-10'>
        <div className="w-full md:w-auto green-pink-gradient bg-tertiary rounded-[20px] p-5 shadow-card flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <div key={service.title} className="w-[120px] h-[120px] bg-tertiary rounded-[15px] p-3 flex flex-col items-center justify-center shadow-md">
              <img src={service.icon} alt={service.title} className="w-10 h-10 object-contain mb-2" />
              <h3 className="text-white text-[12px] text-center font-bold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>



    </>
  );
};

export default SectionWrapper(About, "about");
