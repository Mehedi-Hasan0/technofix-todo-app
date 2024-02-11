import React, { createContext, useState, useContext, useEffect } from "react";
import filterCompletedTodo from "../helper/filterCompletedTodo";

const todosContext = createContext(undefined);

// Type of ToDo context
const TodoContext = ({ children }) => {
  const [todo, setTodo] = useState(() => {
    const data = localStorage.getItem("todos") || "[]";
    return JSON.parse(data);
  });
  const [totalTask, setTotalTask] = useState(todo.length);
  const [completedTask, setCompletedTask] = useState(filterCompletedTodo(todo));

  // generating random ID
  const generateId = Math.floor(Math.random() * 100000000) + 1;

  const handleAddToDo = (todo) => {
    const todoPriority =
      todo?.priority && todo?.priority.length !== 0 ? todo?.priority : "Low";
    const todoTask = todo?.task;
    // saving todo in localstorage
    setTodo((prev) => {
      const newTodos = [
        {
          id: generateId.toString(),
          task: todoTask,
          completed: false,
          priority: todoPriority,
          createdAt: new Date(),
        },
        ...prev,
      ];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const handleToggleToDo = (id) => {
    setTodo((prev) => {
      const newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const handleEditToDO = (id, desc, priority) => {
    setTodo((prev) => {
      const newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, task: desc, priority: priority };
        }

        return todo;
      });

      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const deleteToDo = (id) => {
    setTodo((prev) => {
      const newToDos = prev.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(newToDos));
      return newToDos;
    });
  };

  useEffect(() => {
    // saving totalTask & completedTask based on any create/delete of todo
    setTotalTask(todo.length);

    setCompletedTask(filterCompletedTodo(todo));
  }, [todo]);

  return (
    <todosContext.Provider
      value={{
        todo,
        handleAddToDo,
        handleToggleToDo,
        handleEditToDO,
        deleteToDo,
        totalTask,
        completedTask,
      }}
    >
      {children}
    </todosContext.Provider>
  );
};

export default TodoContext;

export const useToDos = () => {
  const todosConsumer = useContext(todosContext);
  if (!todosConsumer) {
    throw new Error("useTodos used outside of Provider");
  }
  return todosConsumer;
};
