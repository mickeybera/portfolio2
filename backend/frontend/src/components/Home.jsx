import React from "react";
import Typed from 'react-typed';

const pic = "/pic.jpg"; // Access image from public folder

function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-4/5 mx-auto mt-4 p-4">
      {/* Left: Shown second on mobile */}
      <div className="order-2 md:order-1 flex flex-col items-start text-left space-y-4">
        <h1 className="mt-2 font-bold text-4xl md:text-5xl leading-tight">
          Hello! <span className="text-pink-700">I am Arpan</span>
        </h1>
        <h2 className="text-xl md:text-2xl">I am a</h2>
        <Typed
          className="text-2xl md:text-3xl text-blue-500 font-semibold"
          strings={[
            "Developer",
            "Programmer",
            "Coder",
            "UI/UX Designer",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <button className="mt-4 bg-pink-700 text-white py-2 px-6 rounded-lg hover:bg-pink-800 transition duration-300">
          Learn More
        </button>
      </div>

      {/* Right: Shown first on mobile */}
      <div className="order-1 md:order-2 flex justify-center">
        <img
          src={pic}
          alt="Profile"
          className="rounded-md w-40 h-40 md:w-56 md:h-56 md:my-2 shadow-lg"
        />
      </div>
    </div>
  );
}

export default Home;
