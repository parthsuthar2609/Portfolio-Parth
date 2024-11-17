import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Menu = ({ closeMenu }) => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Handle the 'Cancel' button click to navigate to Home and close the menu
  const handleCancel = () => {
    navigate('/'); // Navigate to Home
    closeMenu();   // Close the menu by calling the passed function
  };

  // Handle link click to close the menu
  const handleLinkClick = (path) => {
    closeMenu(); // Close the menu
    navigate(path); // Navigate to the new path
  };

  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-teal-400 flex justify-end items-center z-50">
      <div className="bg-teal-400 p-8 rounded-lg shadow-lg w-full h-full flex flex-col justify-center items-end mr-4">
        {/* Close Button */}
        <button 
          onClick={handleCancel} 
          className="absolute top-8 right-8 text-black text-6xl hover:text-gray-600 hover:animate-pulse transition-transform duration-300 hover:scale-110 shadow-2xl hover:border-teal-400 mr-14"
          aria-label="Close Menu"
        >
          ✕
        </button>

        {/* Navigation Links */}
        <div className="space-y-6 flex flex-col items-center text-black">
          <button 
            onClick={() => handleLinkClick('/about')} 
            className="text-5xl audiowide-font mt-5 hover:text-gray-600 hover:animate-pulse transition-transform duration-300 hover:scale-150"  
          >
            About Me
          </button>
          <button 
            onClick={() => handleLinkClick('/projects')} 
            className="text-5xl audiowide-font mt-5 hover:text-gray-600 hover:animate-pulse transition-transform duration-300 hover:scale-150"
          >
            Projects
          </button>
          <button 
            onClick={() => handleLinkClick('/contact')} 
            className="text-5xl audiowide-font mt-5 hover:text-gray-600 hover:animate-pulse transition-transform duration-300 hover:scale-150"
          >
            Contact
          </button>
          <button 
            onClick={() => handleLinkClick('/myskill')} 
            className="text-5xl audiowide-font mt-5 hover:text-gray-600 hover:animate-pulse transition-transform duration-300 hover:scale-150"
          >
            My Skills
          </button>
          <button 
            onClick={() => handleLinkClick('/experience')} 
            className="text-5xl audiowide-font mt-5 hover:text-gray-600 hover:animate-pulse transition-transform duration-300 hover:scale-150"
          >
            Experience
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
