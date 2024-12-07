import React from "react";

const Playlist = ({ playlist, onSelect }) => {
  return (
    <ul className="playlist">
      {playlist.map((track, index) => (
        <li key={track.id} onClick={() => onSelect(index)}>
          {track.title} - {track.artist}
        </li>
      ))}
    </ul>
  );
};

export default Playlist;
