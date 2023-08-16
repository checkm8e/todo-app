import { useState, createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todoList, setTodoList] = useState([]);
  const listSize = todoList.length;

  const deleteTodoItem = (id) => {
    const element = todoList.filter((item) => item.id !== id);

    setTodoList(element);
  };

  console.log(todoList);

  const data = {
    todoList,
    setTodoList,
    deleteTodoItem,
    listSize,
  };
  return (
    <TodoContext.Provider value={data}>{props.children}</TodoContext.Provider>
  );
};

// export default TodoProvider;
