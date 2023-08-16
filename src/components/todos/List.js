import { useContext } from "react";
import Button from "../UI/Button";
import { TodoContext } from "../../context/Todo-context";

import Cross from "../../resources/images/icon-cross.svg";

import styles from "./List.module.css";

const List = (props) => {
  const { todoList, deleteTodoItem } = useContext(TodoContext);

  const crossButtonClicked = (id) => {
    deleteTodoItem(id);
    console.log("Cross");
  };

  return (
    <ul className={styles.list}>
      {todoList.length === 0 ? (
        <li className={styles.empty}>List is empty.</li>
      ) : (
        todoList.map((todo) => {
          return (
            <li key={todo.id} className={styles["todo-list"]}>
              <Button />
              <p className={styles.todo}>{todo.task}</p>
              <button
                onClick={() => crossButtonClicked(todo.id)}
                className={styles["cross-button"]}
              >
                <img className={styles.cross} src={Cross} alt="Delete" />
              </button>
            </li>
          );
        })
      )}
    </ul>
  );
};

export default List;
