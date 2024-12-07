import React from "react";

const TrackDetails = ({ track }) => {
  return (
    <div>
      <img src={track.cover} alt={`${track.title} cover`} />
      <div>
        <h2>{track.title}</h2>
        <p>{track.artist}</p>
      </div>
    </div>
  );
};

export default TrackDetails;
