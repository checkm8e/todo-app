import { useState, createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");
  const listSize = todoList.filter((item) => !item.completed).length;

  const deleteTodoItem = (id) => {
    const element = todoList.filter((item) => item.id !== id);

    setTodoList(element);
  };

  const deleteCompleted = () => {
    const element = todoList.filter((item) => !item.completed);

    setTodoList(element);
  };

  const markAsComplete = (id) => {
    const updatedTodo = todoList.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );

    setTodoList(updatedTodo);
  };

  let filteredList = [];

  switch (filter) {
    case "active":
      filteredList = todoList.filter((item) => !item.completed);
      break;
    case "completed":
      filteredList = todoList.filter((item) => item.completed);
      break;
    default:
      filteredList = todoList;
  }

  console.log(todoList, filteredList);

  const data = {
    filteredList,
    setTodoList,
    setFilter,
    deleteTodoItem,
    deleteCompleted,
    markAsComplete,
    listSize,
  };
  return (
    <TodoContext.Provider value={data}>{props.children}</TodoContext.Provider>
  );
};

// export default TodoProvider;
