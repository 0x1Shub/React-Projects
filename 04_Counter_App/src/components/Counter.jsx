import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl font-semibold m-[30px]">{count}</span>
      <div>
        <button
          onClick={handleIncrement}
          className="border text-white bg-green-500 p-3 m-10 rounded-xl"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="border text-white bg-red-500 p-3 m-10 rounded-xl"
        >
          Decrement
        </button>
        <button
          onClick={handleReset}
          className="border text-white bg-blue-500 p-3 m-10 rounded-xl"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
