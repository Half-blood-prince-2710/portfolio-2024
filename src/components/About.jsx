// import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className='flex flex-col justify-center items-center w-screen mb-8 pb-8 flex-grow p-4 '
      id='about'>
      <motion.h1
        className='text-white text-6xl font-bold text-center p-4 mb-12'
        animate={{
          scale: [1.5, 1, 1.5],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeOut",
          repeat: Infinity,
        }}>
         About
        <span className='text-orange-500'>
          {" "}
          Me
        </span>
      </motion.h1>

      <div className='w-11/12 md:w-10/12  flex h-full   flex-col xl:flex-row px-6 md:p-0 gap-6 place-items-center p-2  lg:w-4/5 '>
        <div className='flex flex-col  w-full  gap-6 h-full  flex-1'>
          {/* Education */}
          <div className='flex-1 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl h-screen/2 h-full overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-600 to-orange-500 opacity-30 animate-gradient-xy'></div>
            <div className='flex flex-col md:flex-row gap-4 justify-center items-center p-6'>
              <img
                src='/book.png'
                // width='200'
                // height='200'
                alt='book'
                className='w-32 lg:w-52 h-32 lg:h-52'
              />
              <div className='flex flex-col mt-4'>
                <h2 className='text-2xl font-bold text-white/80'>
                  Education
                </h2>
                <p className='text-lg text-white/70 mt-2'>
                  I graduated with a
                  Bachelor of Technology
                  in Computer Science
                  from the National
                  Institute of
                  Technology, Srinagar,
                  as part of the
                  2018-2022 batch,
                  achieving a CGPA of
                  7.93.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className='flex-1 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl h-full overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-600 to-orange-500 opacity-30 animate-gradient-xy'></div>
            <div className='flex flex-col md:flex-row gap-4 justify-center items-center p-6'>
              <img
                src='/finance.png'
                // width='200'
                // height='200'
                alt='finance'
                className='w-32 lg:w-52 h-32 lg:h-52'
              />
              <div className='flex flex-col mt-4'>
                <h2 className='text-2xl font-bold text-white/80'>
                  Technical Skills
                </h2>
                <p className='text-lg text-white/70 mt-2'>
                  I have worked with
                  Reactjs, TailwindCss,
                  MERN Stack and Nextjs
                  etc.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-6 w-full flex-1'>
          {/* Experience */}
          <div className='flex-1 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-600 to-orange-500 opacity-30 animate-gradient-xy'></div>
            <div className='flex flex-col md:flex-row gap-4 justify-center items-center p-6'>
              <img
                src='/card.png'
                // width='200'
                // height='200'
                alt='card'
                className='w-auto h-[130px]'
              />
              <div className='flex flex-col mt-4'>
                <h2 className='text-2xl font-bold text-white/80'>
                  Experience
                </h2>
                <p className='text-lg text-white/70 mt-2'>
                  I have worked on
                  various projects and
                  these experiences have
                  honed my
                  problem-solving skills
                  and my ability to work
                  collaboratively in a
                  team environment.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}

          {/* Interest & Goals */}
          <div className='flex-1 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-600 to-orange-500 opacity-30 animate-gradient-xy'></div>
            <div className='flex flex-col md:flex-row gap-4 justify-center items-center p-6'>
              <img
                src='/pc.png'
                // width='200'
                // height='200'
                alt='pc'
                className='w-32 lg:w-52 h-32 lg:h-52'
              />
              <div className='flex flex-col mt-4'>
                <h2 className='text-2xl font-bold text-white/80'>
                  Interest & Goals
                </h2>
                <p className='text-lg text-white/70 mt-2'>
                  I am particularly
                  interested in the
                  field of web
                  development. As I
                  embark on my
                  professional journey,
                  I aim to secure a
                  position where I can
                  leverage my skills and
                  continue to learn and
                  grow in the field of
                  technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
