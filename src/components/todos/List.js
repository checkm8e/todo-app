import { useContext } from "react";
import { TodoContext } from "../../context/Todo-context";
import { DarkModeContext } from "../../context/Dark-context";

import Cross from "../../resources/images/icon-cross.svg";
import Tick from "../../resources/images/icon-check.svg";

import styles from "./List.module.css";

// need to add styles for completed task

const List = (props) => {
  const { filteredList, deleteTodoItem, markAsComplete } =
    useContext(TodoContext);

  const { darkMode } = useContext(DarkModeContext);

  const crossButtonClicked = (id) => {
    deleteTodoItem(id);
    console.log("Cross");
  };

  const checkButtonClicked = (id) => {
    markAsComplete(id);
    console.log("Completed", id);
  };

  return (
    <ul className={styles.list}>
      {filteredList.length === 0 ? (
        <li
          className={`${styles.empty} ${
            !darkMode ? styles["empty-light"] : styles["empty-dark"]
          }`}
        >
          List is empty.
        </li>
      ) : (
        filteredList.map((todo) => {
          return (
            <li
              key={todo.id}
              className={`${styles["todo-list"]} ${
                !darkMode ? styles["todo-light"] : styles["todo-dark"]
              }`}
            >
              <button
                className={`${styles["tick-button"]} ${
                  todo.completed ? styles["tick-completed"] : ""
                }`}
                onClick={() => checkButtonClicked(todo.id)}
              >
                <img src={Tick} alt="check" />
              </button>
              <p
                className={`${styles.todo} ${
                  todo.completed ? styles.completed : ""
                }`}
              >
                {todo.task}
              </p>
              <button
                onClick={() => crossButtonClicked(todo.id)}
                className={`${styles["cross-button"]} `}
              >
                <img src={Cross} alt="Delete" />
              </button>
            </li>
          );
        })
      )}
    </ul>
  );
};

export default List;
