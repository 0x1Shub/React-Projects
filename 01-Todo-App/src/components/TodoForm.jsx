import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTask = task.trim();
    if (!trimmedTask) return;

    addTodo(trimmedTask);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 transition-colors"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
