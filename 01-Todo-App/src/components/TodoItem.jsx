// src/components/TodoItem.js
import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, newTask.trim());
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded shadow mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        {isEditing ? (
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="ml-2 p-1 border-b border-gray-300 focus:outline-none"
          />
        ) : (
          <span
            className={`ml-2 ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.task}
          </span>
        )}
      </div>
      <div className="flex items-center">
        <span className="text-yellow-500 mr-4">
          {new Date(todo.date).toLocaleDateString()}
        </span>
        <button onClick={handleEdit}>
          {isEditing ? (
            <AiOutlineCheck className="text-green-500 mr-2 cursor-pointer" />
          ) : (
            <AiOutlineEdit className="text-blue-500 mr-2 cursor-pointer" />
          )}
        </button>
        <AiOutlineDelete
          className="text-red-500 cursor-pointer"
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
