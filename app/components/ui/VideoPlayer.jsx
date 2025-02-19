import React from "react";

const VideoPlayer = ({ src }) => {
  return (
    <div className="video-container">
      <video 
        src={src} 
        autoPlay 
        loop 
        muted 
        playsInline
        className="video-element"
      />
    </div>
  );
};

export default VideoPlayer;
