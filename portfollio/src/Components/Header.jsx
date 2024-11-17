import React, { useState, useEffect } from 'react';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Menu from './Menu';  // Import Menu component

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State for menu visibility

  // Check scroll position on window scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Toggle the state to show or hide the menu
  };

  return (
    <div 
      className={`h-24 flex items-center px-4 fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-transparent' : 'bg-zinc-800'}`}
    >
      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center overflow-hidden ml-12">
        <img 
          src="src/assets/Design.png" 
          alt="Logo" 
          className="h-14 w-14"
        />
      </div>
      <a 
        href="/" 
        className="text-6xl text-white audiowide-font pl-2 tracking-widest hover:text-gray-400"
      >
        Parth
      </a>
      <DensityMediumIcon 
        className="text-white !w-16 !h-16 ml-auto mr-14 hover:animate-pulse transition-transform duration-300 hover:scale-110 shadow-md hover:text-teal-300 cursor-pointer" 
        onClick={toggleMenu}  // Toggle menu on click
      />
      {isMenuOpen && <Menu closeMenu={toggleMenu} />}  {/* Conditionally render Menu */}
    </div>
  );
};

export default Header;
