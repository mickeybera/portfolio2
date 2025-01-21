import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects and skills, built with React and Tailwind CSS.",
    link: "https://portfolio-arpan-beras-projects.vercel.app",
  },
  {
    title: "E-commerce App",
    description:
      "A full-stack e-commerce platform with product listings, a shopping cart, and Stripe payment integration.",
    link: "#",
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat application using Socket.IO, React, and Node.js, with support for private and group chats.",
    link: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather app that provides real-time weather updates for any location, using the OpenWeatherMap API.",
    link: "#",
  },
];

function Projects() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen p-6 transition-all duration-300">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-10">
        My <span className="text-pink-700">Projects</span>
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-30 dark:bg-opacity-30 backdrop-blur-lg border border-white border-opacity-40 dark:border-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            {/* Project Title */}
            <h2 className="text-2xl font-bold mb-2 text-pink-700 dark:text-pink-400">
              {project.title}
            </h2>

            {/* Project Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            {/* More Info Button */}
            <a
              href={project.link}
              className="inline-block bg-pink-700 text-white py-2 px-4 rounded-lg hover:bg-pink-800 transition duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
