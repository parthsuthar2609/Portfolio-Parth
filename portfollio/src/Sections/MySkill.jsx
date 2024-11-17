import React from 'react';

const skills = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },

  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "Mongo DB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Sass", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "MySql", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];

const MySkill = () => {
  return (
    <>
      <div className="bg-black text-white font-sans min-h-screen flex flex-col justify-center animate-fadeIn">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Page Title */}
          <h1 className="text-6xl font-extrabold text-teal-400 mb-6 audiowide-font animate-slideDown mt-6">
            My Skills
          </h1>

          {/* Intro Paragraph */}
          <p className="text-lg text-white mb-8 audiowide-font animate-fadeInDelay">
            My skills range from web development to mobile apps, and I thrive in collaborative environments. When I'm not coding, you can find me exploring new tech trends, reading, or contributing to open-source projects.
          </p>

          {/* Skills Sections */}
          <div className="space-y-14">
            {/* Web Development Section */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 animate-fadeIn">
              {/* Text Description */}
              <div className="max-w-md text-left">
                <h2 className="text-4xl text-teal-400 mb-4 animate-slideLeft audiowide-font">Web Development</h2>
                <p className="text-lg text-white audiowide-font text-justify animate-fade-in-slow">
                  Web development is my forte, encompassing both front-end and back-end technologies. I specialize in building responsive, dynamic, and user-friendly websites using tools like React, Node.js, and MongoDB. From creating seamless UI designs to ensuring robust backend logic, I aim to deliver exceptional web experiences.
                </p>
              </div>
              {/* Image */}
              <div className="p-4 rounded-full shadow-lg">
                <img
                  src="./src/assets/Web.png"
                  alt="Web Development"
                  className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-300 animate-wiggle"
                />
              </div>
            </div>

            {/* App Development Section */}
            <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-12 animate-fadeIn">
              {/* Text Description */}
              <div className="max-w-md text-left">
                <h2 className="text-4xl text-teal-400 mb-4 animate-slideLeft audiowide-font">App Development</h2>
                <p className="text-lg text-white audiowide-font text-justify animate-fade-in-slow">
                  App development is my passion, involving both native and cross-platform solutions. I excel in creating intuitive, high-performance mobile apps using frameworks like React Native and Android Studio. Whether it’s building a seamless user interface or optimizing app performance, I focus on delivering mobile experiences that stand out.
                </p>
              </div>
              {/* Image */}
              <div className="p-4 rounded-full shadow-lg">
                <img
                  src="./src/assets/MAD.jpg"
                  alt="App Development"
                  className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-300 animate-wiggle"
                />
              </div>
            </div>

            {/* SEO Development Section */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 animate-fadeIn">
              {/* Text Description */}
              <div className="max-w-md text-left">
                <h2 className="text-4xl text-teal-400 mb-4 animate-slideLeft audiowide-font">SEO Development</h2>
                <p className="text-lg text-white audiowide-font text-justify animate-fade-in-slow">
                  Search Engine Optimization (SEO) is the art and science of enhancing a website's visibility on search engines like Google. It involves optimizing content, keywords, and technical elements to rank higher in search results. By leveraging strategies like on-page optimization, backlink building, and user experience improvements.
                </p>
              </div>
              {/* Image */}
              <div className="p-4 rounded-full shadow-lg">
                <img
                  src="./src/assets/SEOO.jpg"
                  alt="SEO Development"
                  className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-300 animate-wiggle"
                />
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="bg-black text-white py-16 px-4 mt-16">
            <h2 className="text-center text-4xl text-teal-400 mb-6 audiowide-font animate-slideDown">My Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center audiowide-font overflow-hidden">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-24 h-24 md:w-32 md:h-32 object-contain animate-wiggle object-cover filter grayscale transition duration-300 hover:grayscale-0"
                  />
                  <p className="mt-4 text-xl font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkill;
