"use client";
import React, { useState } from "react";
import YouTube from "react-youtube";

export default function VideoPlayer({ youtubeId }) {
  const [isOpen, setIsOpen] = useState(true);

  const option = {
    width: "300",
    height: "200",
  };

  const handleButtonPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const Player = () => {
    return (
      <div className="fixed bottom-3 right-3">
        <button
          onClick={handleButtonPlayer}
          className="text-color-primary float-right bg-color-secondary px-3 mb-1"
        >
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(e) => e.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <div className="fixed bottom-5 right-5">
        <button
          onClick={handleButtonPlayer}
          className="rounded text-lg text-color-dark hover:bg-color-primary bg-color-accent float-right transition-all shadow-xl px-3 py-1 mb-1"
        >
          Tonton Trailer
        </button>
      </div>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
}
