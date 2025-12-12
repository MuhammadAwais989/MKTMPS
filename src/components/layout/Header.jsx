import React from 'react';
import Navbar from './Navbar';
import { schoolInfo } from '../../utils/constant';
import { FaSchool } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <header
  className={`sticky flex justify-between px-4 top-0 z-50 transition-all duration-500 ${
    scrolled
      ? 'bg-gray-700/40 backdrop-blur-md shadow-lg py-2' 
      : 'bg-white/30 backdrop-blur-sm py-4'
  }`}
>

      <div className="w-fit container">
        <div className="flex justify-between items-center w-full">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="bg-linear-to-br from-blue-600 to-blue-700 text-white p-3 rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:scale-105">
                <FaSchool className="w-7 h-7 lg:w-8 lg:h-8" />
              </div>
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
            </div>
            <div className="transition-all duration-500 group-hover:translate-x-1">
              <h1 className="text-xl lg:text-3xl font-bold bg-linear-to-r from-gray-500 to-gray-50 bg-clip-text text-transparent">
                {schoolInfo.name}
              </h1>
              {/* <p className="text-xs lg:text-sm text-gray-50 font-medium ">{schoolInfo.tagline}</p> */}
            </div>
          </Link>

        </div>
      </div>
          <Navbar />
    </header>
  );
};

export default Header;