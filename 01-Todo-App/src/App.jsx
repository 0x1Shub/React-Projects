import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import FilterSort from "./components/FilterSort";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Added date");

  const addTodo = (task) => {
    const newTodo = {
      id: Date.now(),
      task,
      date: new Date(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-4">
        <TodoForm addTodo={addTodo} />
        <FilterSort setFilter={setFilter} setSort={setSort} />
        <TodoList
          todos={todos}
          filter={filter}
          sort={sort}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
