// import a from "next/link";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa"; // FaGithub, FaLinkedin, FaInstagram

// import

const Footer = () => {
  return (
    <div
      className='px-6  md:px0 mt-12 text-white/70 py-8 w-full  border-t border-gray-700
    pt-4 flex justify-between items-center'>
      <h1 className='text-2xl font-bold'>
        © Manish Gupta 
      </h1>
      <div className='flex space-x-6 mt-4'>
        <a
          href='https://github.com/Half-blood-prince-2710'
          target='_blank'
          rel='noopener noreferrer'>
          <FaGithub size={30} />
        </a>
        <a
          href='https://www.linkedin.com/in/manish-gupta-6a378031a/'
          target='_blank'
          rel='noopener noreferrer'>
          <FaLinkedin size={30} />
        </a>
        <a
          href='https://www.instagram.com/half.__.blood.__.prince/'
          target='_blank'
          rel='noopener noreferrer'>
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
