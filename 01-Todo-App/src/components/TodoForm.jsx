import React, { useState, useEffect } from "react";

const TodoForm = ({ addTodo, editTodo, todoToEdit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (todoToEdit) {
      setTitle(todoToEdit.title);
      setDescription(todoToEdit.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [todoToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoToEdit) {
      editTodo({ title, description });
    } else {
      addTodo({ title, description, done: false });
    }
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <button type="submit">{todoToEdit ? "Update Todo" : "Add Todo"}</button>
    </form>
  );
};

export default TodoForm;
