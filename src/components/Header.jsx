import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [navOpen, setNavOpen] =
    useState(false);

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        damping: 10,
        stiffness: 20,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        damping: 10,
        stiffness: 20,
      },
    },
  };

  const links = [
    { title: "About", href: "#about" },
    {
      title: "Portfolio",
      href: "#portfolio",
    },
  ];

  return (
    <header className='h-24 w-full p-2 flex items-center justify-between'>
      <h1 className='text-4xl p-2 mx-2 my-2'>
        MG
      </h1>
      <div className='hidden md:flex md:w-full md:items-center justify-center space-x-4 text-2xl font-bold'>
        {links.map((link, index) => (
          <div
            key={index}
            className='p-4 pb-6 text-bold hover:scale-110 cursor-pointer'>
            <a href={link.href}>
              {link.title}
            </a>
          </div>
        ))}
        <div className='group relative hover:scale-120'>
          <a href='#contact'>Contact</a>
          <div className='h-1 w-2/3 bg-orange-400 transition-all duration-500 ease-out group-hover:w-full'></div>
          <div className='h-1 w-1/3 bg-orange-600 transition-all duration-500 ease-out group-hover:w-full'></div>
        </div>
      </div>
      <div
        onClick={handleNav}
        className='absolute top-6 right-6 p-2 border rounded text-white/70 border-white/70 z-40 md:hidden'>
        {navOpen ? (
          <X size={30} />
        ) : (
          <Menu size={30} />
        )}
      </div>

      <motion.div
        initial={false}
        animate={
          navOpen ? "open" : "closed"
        }
        variants={menuVariants}
        className='absolute top-0 left-0 bg-black/90 text-white/70 p-8 w-full min-h-screen z-30 overflow-x-hidden overflow-y-auto md:hidden'
        style={{
          maxHeight: "90vh",
          overflowY: "auto",
        }}>
        <div className='text-5xl text-center space-y-10 font-bold w-full h-full my-24'>
          {links.map((link, index) => (
            <div
              key={index}
              className='p-2 text-bold'
              onClick={closeNav}>
              <a href={link.href}>
                {link.title}
              </a>
            </div>
          ))}
          <div
            className='p-2 text-bold'
            onClick={closeNav}>
            <a href='#contact'>
              Contact
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
