"use client";
import React, { useState } from 'react';
import Link from 'next/link';

interface Props {
  className?: string;
}

const Navbar: React.FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${className} p-4 bg-white text-black`} style={{ backgroundImage: 'url("/nb1.avif")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold baskervville-sc-regular">Parasmani</h1>
          <span className="dancing-script-unique text-5xl">Gems</span>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        <div className={`fixed top-0 right-0 h-screen w-2/3 z-50 flex flex-col items-start justify-start bg-black bg-opacity-50 backdrop-blur-lg p-8 transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'} lg:flex lg:flex-row lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:bg-opacity-100 lg:backdrop-blur-none lg:items-center lg:gap-10 lg:mr-5 lg:p-0`}>
          <div className="w-full flex justify-end lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <Link href="/" className="block w-full py-4 text-left text-white tracking-wide hover:text-gray-300 lg:w-auto lg:text-black lg:mx-4">HOME</Link>
          <Link href="/shop" className="block w-full py-4 text-left text-white tracking-wide hover:text-gray-300 lg:w-auto lg:text-black lg:mx-4">SHOP</Link>
          <Link href="/about-us" className="block w-full py-4 text-left text-white tracking-wide hover:text-gray-300 lg:w-auto lg:text-black lg:mx-4">ABOUT US</Link>
          <Link href="/contact-us" className="block w-full py-4 text-left text-white tracking-wide hover:text-gray-300 lg:w-auto lg:text-black lg:mx-4">CONTACT US</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
