import React from 'react';
import PlayListItem from './PlayListItem';
import './PlayList.css';

const PlayList = ({ videoJson, onVideoSelection }) => {
  return (
    <div className="playlist-container">
      {videoJson.map((video) => (
        <PlayListItem key={video.id} videoItem={video} onVideoSelection={onVideoSelection} />
      ))}
    </div>
  );
};

export default PlayList;
