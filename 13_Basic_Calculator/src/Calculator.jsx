import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleEquals = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-xs w-full">
        <div className="text-right text-white text-3xl mb-4 p-4 bg-gray-800 rounded">
          {input}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/"].map((char) => (
            <button
              key={char}
              onClick={() => handleClick(char)}
              className="bg-gray-700 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-600"
            >
              {char}
            </button>
          ))}
          {["4", "5", "6", "*"].map((char) => (
            <button
              key={char}
              onClick={() => handleClick(char)}
              className="bg-gray-700 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-600"
            >
              {char}
            </button>
          ))}
          {["1", "2", "3", "-"].map((char) => (
            <button
              key={char}
              onClick={() => handleClick(char)}
              className="bg-gray-700 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-600"
            >
              {char}
            </button>
          ))}
          {["0", ".", "=", "+"].map((char) => (
            <button
              key={char}
              onClick={() =>
                char === "=" ? handleEquals() : handleClick(char)
              }
              className="bg-gray-700 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-600"
            >
              {char}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="bg-gray-700 text-white py-2 px-4 col-span-2 rounded-lg shadow hover:bg-gray-600"
          >
            C
          </button>
          <button
            onClick={handleBackspace}
            className="bg-gray-700 text-white py-2 px-4 col-span-2 rounded-lg shadow hover:bg-gray-600"
          >
            CE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
