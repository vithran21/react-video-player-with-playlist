import React from 'react';
import './Player.css';

const Player = ({ videoSrc, title, description }) => {
  return (
    <div className="player-container">
      <video src={videoSrc} autoPlay controls></video>
      <div className="video-details">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Player;
