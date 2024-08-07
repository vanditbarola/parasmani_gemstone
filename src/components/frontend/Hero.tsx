// components/Hero.tsx

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative bg-custom-gradient h-[60vh] flex flex-col-reverse justify-around lg:flex-row items-center lg:justify-evenly">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center lg:text-left p-4 mt-5 lg:mt-0 lg:ml-10">
        <motion.h1
          className="text-4xl md:text-5xl great-vibes-regular text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Parasmani Gems
        </motion.h1>
        <motion.p
          className="mt-2 font-light text-lg md:text-xl text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Treasures of the Earth,<br />
          Gifts of the Heart
        </motion.p>
      </div>
      <div className="relative z-10 mb-5 lg:mb-0 lg:mr-10 p-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Image src="/d1.png" alt="Gem" width={400} height={400} className="max-w-full h-auto" />
        </motion.div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4">
        
      </div>
    </div>
  );
};

export default Hero;
