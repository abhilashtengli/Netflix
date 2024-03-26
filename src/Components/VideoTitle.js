import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[16%] pl-16 absolute bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      <p className="py-6 w-1/4 text-white">{overview}</p>
      <div className="w-1/5 flex justify-between">
        <button className=" bg-white text-black font-semibold hover:opacity-80 text-xl px-8 p-2 rounded-lg">
          ⏯️ Play
        </button>
        <button className=" bg-gray-500 opacity-60 text-white font-semibold hover:opacity-40 text-xl px-6 p-2 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
