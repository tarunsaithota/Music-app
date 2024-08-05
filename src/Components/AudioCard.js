import React, { useState } from "react";

const AudioCard = ({ poster, name, year, download, index, handlePlayButtonClick, playingIndex }) => {
    const isPlaying = playingIndex === index;
    const handlePlayButton = (e) => {
        e.preventDefault();
        //setDisplayControls(true);
        handlePlayButtonClick(index);
    }
  return (
    <div className="w-44 md:w-60 pr-8">
      <img className="w-full" src={poster} alt="poster" />
      <div className="my-2 w-full h-10 flex justify-between">
        <p className="line-clamp-2 text-gray-700 text-xs md:text-sm md:font-semibold">
          {name}, {year}
        </p>
        <button onClick={handlePlayButton}>▶️</button>
      </div>
      {isPlaying && <div className="flex my-2">
        <audio controls className="w-full">
          <source src={download} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>}
    </div>
  );
};
{/* <a href={download} download><p className="md:text-2xl">▶️ </p></a>
          <a href={download} download><p className="md:text-2xl">⬇️</p></a> */}
export default AudioCard;