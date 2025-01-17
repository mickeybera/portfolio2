import React from "react";
import { 
  FaInstagram, 
  FaFacebook, 
  FaTwitter, 
  FaGithub, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaNodeJs 
} from "react-icons/fa";
import { 
  SiMongodb, 
  SiExpress, 
  SiPython, 
  SiTailwindcss, 
  SiApachespark 
} from "react-icons/si";

function AboutMe() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-3xl" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400 text-3xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-800 text-3xl" /> },
    { name: "Python", icon: <SiPython className="text-blue-400 text-3xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-3xl" /> },
    { name: "Git & GitHub", icon: <FaGithub className="text-gray-800 text-3xl" /> },
    { name: "API Integration", icon: <SiApachespark className="text-red-500 text-3xl" /> },
  ];

  const socialLinks = [
    { platform: "Instagram", url: "https://www.instagram.com/developer_mickey?utm_source=qr&igsh=eHlzenEwd2FkaGpw", icon: <FaInstagram className="text-pink-500 text-3xl" /> },
    { platform: "Facebook", url: "https://www.facebook.com/share/156RPFq9mw/", icon: <FaFacebook className="text-blue-600 text-3xl" /> },
    { platform: "Twitter", url: "https://x.com/arpanbera475?t=5VJwn6WYxz-SzqwhE6SRqA&s=08", icon: <FaTwitter className="text-blue-400 text-3xl" /> },
    { platform: "GitHub", url: "https://github.com/mickeybera", icon: <FaGithub className="text-gray-800 text-3xl" /> },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen p-6 transition-all duration-300">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-10">
        About <span className="text-pink-700">Me</span>
      </h1>

      {/* Introduction Section */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Hello! I’m <span className="text-pink-700 font-bold">[Arpan]</span>, a passionate software developer dedicated to creating engaging and efficient solutions. 
          With a strong foundation in programming and a keen eye for design, I enjoy building web applications that are both functional and visually appealing.
        </p>
      </div>

      {/* Skills Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          My <span className="text-pink-700">Skills</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-2">{skill.icon}</div>
              <span className="text-lg font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Values/Work Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-semibold text-center mb-6">
          What I <span className="text-pink-700">Believe In</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
          I strive to write clean, maintainable code and believe that collaboration is key to delivering exceptional software. 
          I enjoy solving complex problems and continuously learning new technologies to improve my skills. 
          My goal is to create applications that not only meet user needs but also exceed expectations in terms of performance and usability.
        </p>
      </div>

      {/* Follow Me Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center px-4">
        <h3 className="text-3xl font-semibold mb-6">Follow Me</h3>
        <div className="flex justify-center flex-wrap gap-6 md:gap-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300 text-3xl sm:text-4xl md:text-5xl"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
