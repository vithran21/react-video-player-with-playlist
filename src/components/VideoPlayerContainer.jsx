import React, { useState } from 'react';
import Player from './Player';
import PlayList from './PlayList';
import './VideoPlayerContainer.css';

const VideoPlayerContainer = ({ videoJson }) => {
  const [videoSrc, setVideoSrc] = useState(videoJson[0].videoUrl);
  const [videoTitle, setVideoTitle] = useState(videoJson[0].title);
  const [videoDescription, setVideoDescription] = useState(videoJson[0].description);

  const onVideoSelection = (videoUrlSelected, title, description) => {
    setVideoSrc(videoUrlSelected);
    setVideoTitle(title);
    setVideoDescription(description);
  };

  return (
    <div className="video-player-container">
      <div className="main-player">
        <Player videoSrc={videoSrc} title={videoTitle} description={videoDescription} />
      </div>
      <div className="playlist-aside">
        <PlayList videoJson={videoJson} onVideoSelection={(url, title, description) => onVideoSelection(url, title, description)} />
      </div>
    </div>
  );
};

export default VideoPlayerContainer;
