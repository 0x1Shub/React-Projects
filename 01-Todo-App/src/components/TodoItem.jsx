import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TodoItem = ({ todo, index, handleEdit, handleDelete, handleToggle }) => {
  return (
    <div className={`todo ${todo.done ? "done" : ""}`}>
      <h3 onClick={() => handleToggle(index)}>{todo.title}</h3>
      <p onClick={() => handleToggle(index)}>{todo.description}</p>
      <div className="actions">
        <FaEdit onClick={() => handleEdit(index)} />
        <FaTrash onClick={() => handleDelete(index)} />
      </div>
    </div>
  );
};

export default TodoItem;
