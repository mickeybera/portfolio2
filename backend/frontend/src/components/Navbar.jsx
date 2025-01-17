import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Apply dark mode class to the HTML element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Add shadow when scrolled down
      } else {
        setIsScrolled(false); // Remove shadow when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`sticky top-0 z-50 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-300 rounded-lg ${
        isScrolled ? "shadow-lg" : "" // Add shadow on scroll
      }`}
    >
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-pink-700 dark:text-pink-400 cursor-pointer"
        >
          Portfolio
        </Link>

        {/* Navigation Links */}
        <div className="flex">
          <ul className="hidden md:flex gap-6 font-medium">
            <li className="hover:text-pink-500 dark:hover:text-pink-300 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-pink-500 dark:hover:text-pink-300 cursor-pointer">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="hover:text-pink-500 dark:hover:text-pink-300 cursor-pointer">
              <Link to="/about">About Me</Link>
            </li>
            <li className="hover:text-pink-500 dark:hover:text-pink-300 cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center w-16 h-16 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300"
          >
            {/* Lightbulb Icon */}
            <span className="material-icons">
              {isDarkMode ? "lightbulb" : "lightbulb_outline"}
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Navbar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-900 text-pink-700 dark:text-pink-400 md:hidden transition-all duration-300">
        <ul className="flex justify-around items-center py-2">
          <li className="text-center">
            <Link
              to="/"
              className="hover:text-pink-500 dark:hover:text-pink-300 transition duration-300 flex flex-col items-center"
            >
              <span className="material-icons">home</span>
              <span className="text-sm">Home</span>
            </Link>
          </li>
          <li className="text-center">
            <Link
              to="/projects"
              className="hover:text-pink-500 dark:hover:text-pink-300 transition duration-300 flex flex-col items-center"
            >
              <span className="material-icons">work</span>
              <span className="text-sm">Projects</span>
            </Link>
          </li>
          <li className="text-center">
            <Link
              to="/about"
              className="hover:text-pink-500 dark:hover:text-pink-300 transition duration-300 flex flex-col items-center"
            >
              <span className="material-icons">person</span>
              <span className="text-sm">About</span>
            </Link>
          </li>
          <li className="text-center">
            <Link
              to="/contact"
              className="hover:text-pink-500 dark:hover:text-pink-300 transition duration-300 flex flex-col items-center"
            >
              <span className="material-icons">mail</span>
              <span className="text-sm">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
