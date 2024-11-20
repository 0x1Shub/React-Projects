import React from "react";

const FetchButton = ({ onClick }) => {
  return (
    <button className="fetch-button" onClick={onClick}>
      New Quote
    </button>
  );
};

export default FetchButton;
