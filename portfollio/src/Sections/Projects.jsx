import React from "react";

// Tailwind configuration


const projects = [
  {
    title: "Online Learning Platform",
    description: "A platform for online learning using React.js And Material Ui , Formik & YUP .",
    github: "https://github.com/parthsuthar2609/Online-Learning-Platform-Using-React.js",
  },
  {
    title: "Stock and Forex Prediction Using Machine Learning",
    description: "web-based interface for interactive prediction and an API for programmatic access to prediction capabilities.",
    github: "https://github.com/parthsuthar2609/Stock-Forex-Prediction-Using-ML",
  },
  {
    title: "#PlayTube Backend ",
    description: "PlayTube is a comprehensive platform designed for video sharing, streaming, and social networking.",
    github: "https://github.com/parthsuthar2609/PlayTube-Backend",
  },
  {
    title: "Bill Management System",
    description: "This Python-based project is designed to provide a straightforward solution for managing and tracking your bills.",
    github: "https://github.com/parthsuthar2609/Billify-Python-Bill-Management-System",
  },
  {
    title: "Weather Forecasting App",
    description: "Weather Forecasting App, a web application designed to provide users with real-time weather information.",
    github: "https://github.com/parthsuthar2609/Weather-Forecasting-App",
  },
  {
    title: "Keep Application",
    description: "Clone Of Google Keep App , which is Useful for Keep Notes at one Location",
    github: "https://github.com/parthsuthar2609/Keep-App",
  },
];

const Projects = () => {
  return (
    <div className="bg-black min-h-screen py-12 px-5 animate-fade-in-slow">
      <h2 className=" text-teal-300  text-center mb-12 animate-fade-in text-6xl audiowide-font">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-teal-300 text-black shadow-lg rounded-lg p-8 transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold mb-4 text-4xl audiowide-font ">
              {project.title}
            </h3>
            <p className="mb-6 text-2xl audiowide-font">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-audioword hover:white text-xl audiowide-font"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
