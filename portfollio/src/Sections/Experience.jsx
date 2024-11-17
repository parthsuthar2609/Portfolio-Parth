import React from 'react';

// Sample data for experience
const experienceData = [
  {
    title: 'React Js Intern',
    company: 'Tech Elecon Pve.Ltd',
    description: 'Developed scalable web applications using React.js and Node.js, collaborating with cross-functional teams.',
    duration: 'May - June 2024',
  },
  {
    title: 'MERN Stack Developer',
    company: 'Free Lance',
    description: 'Built responsive UI components using React, ensuring seamless user experience across devices.',
    duration: '2024',
  },
  {
    title: 'Associate DX Engineer',
    company: '@Horizontal Digital',
    description: 'Assisted in the development of mobile and web applications, focusing on user interface design.',
    duration: '2025 - January',
  },
];

const Experience = () => {
  return (
    <div className="bg-black text-white p-8 shadow-lg animate-fadeInDelay w-auto">
      <h2 className="text-6xl  text-teal-400 mb-8 audiowide-font text-center w-auto">My Exp</h2>
      <div className="space-y-6">
        {experienceData.map((job, index) => (
          <div key={index} className="bg-teal-400 p-6 rounded-lg shadow-md audiowide-font animate-slideLeft">
            <h3 className="text-2xl font-semibold text-black audiowide-font animate-fadeInDelay">{job.title}</h3>
            <h4 className="text-xl text-black mb-2 audiowide-font animate-fadeInDelay">{job.company}</h4>
            <p className="text-lg text-black mb-4 audiowide-font animate-fadeInDelay">{job.description}</p>
            <span className="text-sm text-gray-900 audiowide-font animate-fadeInDelay">{job.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
