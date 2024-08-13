import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoToEdit, setTodoToEdit] = useState(null);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const editTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo === todoToEdit ? { ...todoToEdit, ...updatedTodo } : todo
    );
    setTodos(updatedTodos);
    setTodoToEdit(null);
  };

  const handleEdit = (index) => {
    setTodoToEdit(todos[index]);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleToggle = (index) => {
    const updatedTodos = todos.slice();
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} editTodo={editTodo} todoToEdit={todoToEdit} />
      <TodoList
        todos={todos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    </div>
  );
}

export default App;
