// import { Link } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Klimate",
      desc: "A app that that show current weather, hourly temp, future forecast etc.",
      devStack:
        "Reactjs, TailwindCss, Shadcn, React-Query, OpenWeatherAPI, Recharts",
      github:
        "https://github.com/Half-blood-prince-2710/weather-app",
      src: "./weather.png",
    },
    {
      title: "Intelliwealth Advisors",
      desc: "A app which manages your finance and gives suggestions with the help of AI.",
      devStack:
        "Nextjs, React, NeonDb, Tailwindcss, Typescript, Drizzle-Orm , clerk",
      github:
        "https://github.com/Half-blood-prince-2710/IntelliWealth-Advisors",
      src: "./Project1.png",
    },
    {
      title: "Aesthetic Ai",
      desc: "A app which designs your room interior with the help of AI.",
      devStack:
        "Nextjs, React, NeonDb, Tailwindcss, Drizzle-Orm, shad-cn, clerk",
      github: "#",
      src: "./Project2.png",
    },
    {
      title: "MG PortFolio",
      desc: "A portfolio website for Manish Gupta.",
      devStack:
        "Nextjs, React, Framer-motion, Tailwindcss",
      github: "#",
      src: "./mg-portfolio.png",
    },
    {
      title: "Task Senior Manager",
      desc: "A task management app with comprehensive database integration that allows you to view and manage your tasks using a calendar interface, as well as add new tasks effortlessly.",
      devStack:
        "Nextjs, React, MongoDb, Nodejs, Express, Tailwindcss, clerk , shad-cn",
      github:
        "https://github.com/Half-blood-prince-2710/Task_manager_2024_Mern/tree/master",
      src: "./Project2.png",
    },
    {
      title: "Habit Management",
      desc: "A habit management app with state management libraries like redux-toolkit and zustand . There are implementation using both libraries ",
      devStack:
        "Nextjs, React, MongoDb, Nodejs, Express, Tailwindcss, clerk , shad-cn",
      github:
        "https://github.com/Half-blood-prince-2710/Task_manager_2024_Mern/tree/master",
      src: "./mgtools-hm.png",
    },
  ];
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] w-full  flex flex-col justify-center items-center  px-4 mt-40 '
    id='portfolio'>
      <motion.h1 className='text-white text-6xl font-bold text-center p-4'
        animate={{ scale: [1.5,1,1.5], opacity:[0,1,0] }}
      transition={{ duration: 4, ease: "easeOut", repeat: Infinity}}>
        My
        <span className='text-orange-500 ml-3'>
           Projects
        </span>
      </motion.h1>
      <div className=' w-full flex flex-col  items-center justify-center mx-4 mt-20 space-y-24'>
        {projects.map(
          (project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 75,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              className={`mt-12 md:px-4 flex flex-col justify-center items-center  w-full xl:w-3/4   ${
                index % 2 === 1
                  ? "lg:flex-row-reverse gap-12"
                  : " lg:flex-row gap-12"
              }`}>
              <div className=' mx-6 w-11/12'>
                <h2 className='text-7xl my-4 text-white/70'>{`0${
                  index + 1
                }`}</h2>
                <h2 className='text-4xl'>
                  {project.title}
                </h2>
                <p className='text-lg text-white/70 break-words p-4'>
                  {project.desc}
                </p>
                <p className='text-xl text-orange-500 font-semibold'>
                  {project.devStack}
                </p>
                <div className='w-64 h-[1px] bg-gray-400 my-4'>
                  <a
                    href={
                      project.github
                    }>
                    {" "}
                    Github{" "}
                  </a>
                </div>
              </div>
              <div>
                <img
                  src={project.src}
                  width={700}
                  height={600}
                  alt={project.title}
                  className='h-[350px]  object border rounded border-gray-700 '
                />
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
