import React from "react";

const QuoteDisplay = ({ quote, author }) => {
  return (
    <div className="quote-container">
      <p className="quote">{`"${quote}"`}</p>
      <p className="author">{`- ${author}`}</p>
    </div>
  );
};

export default QuoteDisplay;
