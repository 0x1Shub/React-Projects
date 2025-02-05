import React from "react";
import TodoItem from "./TodoItem";
import { motion, AnimatePresence } from "framer-motion";

const TodoList = ({
  todos,
  filter,
  sort,
  toggleComplete,
  deleteTodo,
  editTodo,
}) => {
  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    if (filter === "Completed") return todo.completed;
    if (filter === "Pending") return !todo.completed;
    return true;
  });

  const sortedTodos = filteredTodos.sort((a, b) => {
    if (sort === "Added date") {
      return new Date(b.date) - new Date(a.date);
    }
    return 0;
  });

  return (
    <div>
      {sortedTodos.length ? (
        <AnimatePresence>
          {sortedTodos.map((todo) => (
            <motion.div
              key={todo.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.3 }}
              layout
            >
              <TodoItem
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      ) : (
        <p className="text-center text-gray-500 mt-4">No tasks found.</p>
      )}
    </div>
  );
};

export default TodoList;
