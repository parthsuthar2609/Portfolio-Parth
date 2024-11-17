// About.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col justify-center ">
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h1 className="text-6xl font-extrabold text-teal-400 mb-6  audiowide-font animate-fadeInDelay">
          About Me
        </h1>
        
        <p className="text-xl text-gray-100 mb-4 text-6xl audiowide-font animate-fade-in-slow">
          Hello! I'm Parth Suthar, a passionate developer with a love for technology and creativity. I enjoy exploring new frameworks and building innovative projects that can make a difference. I believe in continuous learning and staying curious.
        </p>
        
        <p className="text-lg text-white mb-8 text-6xl audiowide-font animate-fade-in-slow">
          My skills range from web development to mobile apps, and I thrive in collaborative environments. When I'm not coding, you can find me exploring new tech trends, reading, or contributing to open-source projects.
        </p>

        <div className="text-left text-white text-6xl audiowide-font animate-fade-in-slow">
          <h2 className="text-3xl font-semibold text-teal-400 mb-4">Education</h2>
          <p className="text-lg mb-2 text-6xl audiowide-font">
            <strong className='animate-fade-in-slow'>School:</strong> <span className='text-teal-400 animate-fade-in-slow'>St Xavier's High School, 2021</span>
          </p>
          <p className="text-lg mb-2 text-6xl audiowide-font">
            <strong className='animate-fade-in-slow'>College:</strong> <span className='text-teal-400 animate-fade-in-slow'>A D Patel Institute of Technology, 2021 - Present</span> 
          </p>
        </div>

        <div className="text-left text-gray-300 mt-8 text-6xl audiowide-font animate-fade-in-slow">
          <h2 className="text-3xl font-semibold text-teal-400 mb-4 audiowide-font animate-fade-in-slow">Experience</h2>
          <p className="text-lg mb-2">
            <strong className='animate-fade-in-slow'>Company:</strong> <span className='text-teal-400 animate-fade-in-slow'>Horizontal Digital-2025</span> 
          </p>
          <p className="text-lg mb-2 text-2xl audiowide-font">
            <strong className='animate-fade-in-slow'>Internship:</strong> <span className='text-teal-400 animate-fade-in-slow'>Tech Elecon Pvt.Ltd , Anand - 2024</span> 
          </p>
        </div>

        <div className="flex justify-center gap-8 mt-8 text-xl audiowide-font ">
          <a href="https://github.com/parthsuthar2609/" className="text-teal-400 hover:text-teal-600 transition duration-300 animate-fade-in-slow">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/parth-suthar-91b4102a7/" className="text-teal-400 hover:text-teal-600 transition duration-300 animate-fade-in-slow">
            LinkedIn
          </a>
          <a href="parthsuthar2609@gmail.com" className="text-teal-400 hover:text-teal-600 transition duration-300 animate-fade-in-slow ">
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
