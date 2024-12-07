// src/components/Controls.jsx
import React from "react";

const Controls = ({ isPlaying, onPlay, onPause, onNext, onPrev }) => (
  <div className="controls">
    <button onClick={onPrev}>⏮</button>
    {isPlaying ? (
      <button onClick={onPause}>⏸</button>
    ) : (
      <button onClick={onPlay}>▶</button>
    )}
    <button onClick={onNext}>⏭</button>
  </div>
);

export default Controls;
