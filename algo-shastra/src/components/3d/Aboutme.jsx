import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Arindam from '../../images/Arindam1.jpg'
import { FaInstagramSquare } from "react-icons/fa";
const Aboutus = () => {
  return (
    <div className="flex h-[500px] justify-center bg-neutral-900 px-3 py-4">

      <FlyoutLink FlyoutContent={PricingContent}>
        <h1 className="text-3xl">About me!</h1>
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children,  FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href="#" className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>

        <div className="mt-4 w-80">
        <img src={Arindam}  alt="" />
        </div>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">Developer Behind Algoshastra 👋</h3>
        <a href="#" className="block text-sm hover:underline">
          Arindam Sharma
        </a>
        <a href="#" className="block text-sm hover:underline">
          MERN Stack Developer
        </a>
      </div>
      <div className="flex flex-col items-center space-y-3">
        <h3 className="font-semibold">Connect me on!</h3>
        <a href="https://www.linkedin.com/in/arindam-sharma30/" className="block text-sm hover:underline">
          <FaLinkedin size={25}/>
        </a>
        <a href="https://github.com/Arindamsharma12" className="block text-sm hover:underline">
        <FaGithub size={25}/>
        </a>
        <a href="https://www.instagram.com/arindam_sharma30/" className="block text-sm hover:underline">
          <FaInstagramSquare size={25}/>
        </a>
      </div>
      <button className="mt-4 w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        Contact +919354685531
      </button>
    </div>
  );
};

export default Aboutus;