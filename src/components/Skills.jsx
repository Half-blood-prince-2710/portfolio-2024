import React from "react";
import {
  RiReactjsFill,
  RiTailwindCssFill,
  RiNextjsFill,
} from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
const skillIcons = [
  {
    icon: (
      <RiReactjsFill
        color='#0284c7'
        size={150}
      />
    ),
    label: "React",
  },
  {
    icon: (
      <RiTailwindCssFill
        color='#2563eb'
        size={150}
      />
    ),
    label: "Tailwindcss",
  },
  {
    icon: (
      <RiNextjsFill
        color='black'
        size={150}
      />
    ),
    label: "Nextjs",
  },
  {
    icon: (
      <DiMongodb
        color='#047857'
        size={150}
      />
    ),
    label: "MongoDB",
  },
  {
    icon: <SiExpress size={150} />,
    label: "Express",
  },
];

const Skills = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] pt-24 py-12 md:py-24 px-4 md:px-12'>
      <div className='text-white max-w-[900px] mx-auto flex flex-col items-center '>
        <motion.h1
          className='text-white text-6xl font-bold text-center mb-12 p-4'
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Infinity,
          }}>
          What I
          <span className='text-orange-500 ml-3'>
            Know
          </span>
        </motion.h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 w-full'>
          {skillIcons.map(
            (skill, index) => (
              <div
                key={index}
                className='h-[180px] sm:h-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'>
                {skill.icon}
                <p className='mt-2 text-lg sm:text-base'>
                  {skill.label}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
