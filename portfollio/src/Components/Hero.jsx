import React, { useState, useEffect } from 'react';
import './Hero.css';


const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Parth Suthar';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 150); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black h-screen w-full flex flex-row justify-between items-center p-8 king flex-wrap">
      {/* Left Section: Text */}
      <div className="flex flex-col">
        <h1 className="text-6xl text-white audiowide-font ">
          <span className="text-teal-300">Hii</span>, I'M <span className="text-teal-300">{text}</span>
        </h1>
        <h1 className="text-5xl text-white mt-4 audiowide-font">
          Associate <span className="text-teal-300">DX</span> Engineer
        </h1>
        <h1 className="text-teal-300 text-5xl audiowide-font  mt-5">
          @Horizontal
        </h1>
      </div>

      {/* Right Section: Image */}
      <div>
        <img
          src="src/assets/Myimg.jpg"
          alt="Profile"
          className="w-80 h-80 object-cover rounded-full border-white border-4 hover:animate-pulse transition-transform duration-300 hover:scale-110  shadow-2xl  hover:border-teal-400 animate-fadeInDelay " // Adjust size and styling as needed
        />
      </div>
    </div>
  );
};

export default Hero;
