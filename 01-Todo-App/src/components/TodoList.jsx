import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleEdit, handleDelete, handleToggle }) => {
  return (
    <div className="container">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
