import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-tertiary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-auto"> 
            <a href="mailto:adityapatra7293@gmail.com" className="flex items-center gap-2 text-[14px] hover:text-[#915EFF]">
              <FaEnvelope /> adityapatra7293@gmail.com
            </a>
            <p className="flex items-center gap-2 text-[14px]"><FaPhone /> +91 9348491282</p>
            <p className="flex items-center gap-2 text-[14px]"><FaMapMarkerAlt /> Bhubaneswar, Odisha, India</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/aditya-patra-6016091b8/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="hover:text-[#915EFF]" />
            </a>
            <a href="https://github.com/iamaditya17" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} className="hover:text-[#915EFF]" />
            </a>
          </div>
        </div>
        <div className="text-center mt-4 text-[12px] text-secondary w-full">
          © {new Date().getFullYear()} Aditya Patra. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;