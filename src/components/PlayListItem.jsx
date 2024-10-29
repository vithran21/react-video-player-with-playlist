import React from 'react';
import './PlayListItem.css';

const PlayListItem = ({ videoItem, onVideoSelection }) => {
  const handleVideoSelection = () => {
    onVideoSelection(videoItem.videoUrl, videoItem.title, videoItem.description);
  };

  return (
    <div className="playlist-item" onClick={handleVideoSelection}>
      <img src={videoItem.thumbnailUrl} alt={videoItem.title} />
      <h3>{videoItem.title}</h3>
    </div>
  );
};

export default PlayListItem;
