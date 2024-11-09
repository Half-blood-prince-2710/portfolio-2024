import { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [state, setState] =
    useState(true);

  return (
    <div
      className={`py-24 relative overflow-clip px-4 ${
        state
          ? "bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)] flex-grow"
          : "bg-[linear-gradient(to_bottom,#1a1a1a,#4a4e69_35%,#2B2D42_60%,#1a1a1a_80%)] flex-grow"
      }`}>
      {state ? (
        <div className='absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]' />
      ) : (
        <div className='absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B2D42_90%,#4a4e69)]' />
      )}

      <div className='relative'>
        <div className='text-8xl font-bold text-center'>
          <h1 className='text-[#98B4CE]'>
            Hi, I am
          </h1>
          <h1 className='text-[#E48A57]'>
            Manish Gupta
          </h1>
        </div>
        <motion.div
          className='hidden md:block absolute left-16 xl:left-24 bottom-36'
          animate={{ y: [0, 80, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            repeatType: "reverse",
          }}
          drag>
          <img
            src='/icon1.png'
            width='150'
            height='150'
            alt='cursor'
            className='xl:h-64 xl:w-64'
            draggable='false'
          />
        </motion.div>
        <motion.button
          title='Click for Magic!'
          className='hidden md:block absolute right-8 lg:right-24 -top-8'
          drag
          animate={{
            scale: [1, 1.5, 1],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          onClick={() =>
            setState(!state)
          }>
          <img
            src='/icon2.png'
            alt='lightning'
            className='h-32 xl:h-52 w-16 xl:w-36'
            draggable='false'
          />
          
        </motion.button>
        <p className='text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80'>
          I am a React.js / Next.js
          developer focused on creating
          websites that provide the best
          experience for users.
        </p>
        <img
          src='/profilepic.png'
          alt='profile picture'
          width='512'
          height='512'
          className='h-auto w-auto mx-auto'
        />
        <div className="w-full flex justify-center">

          <button
            title='click me to see magic'
            className="self-end  p-1 rounded-full absolute bottom-[4.6rem] h-[3.2rem] w-[3.2rem] border-gray-300 shadow-lg shadow-black ext-lg border-2 text-black"
          onClick={()=>setState(!state)}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
