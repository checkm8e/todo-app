import { useState, useContext } from "react";
import { TodoContext } from "../../context/Todo-context";
import { DarkModeContext } from "../../context/Dark-context";

import Button from "../UI/Button";

import styles from "./Form.module.css";

const Form = () => {
  const { setTodoList } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");

  // DarkMode code
  const { darkMode } = useContext(DarkModeContext);

  // Todo-related code
  const handleInputValueChange = (event) => {
    setInputValue(event.target.value);
  };

  const pushData = (data) => {
    const value = {
      id: Date.now(),
      task: data,
      completed: false,
    };

    setTodoList((prevTodo) => [value, ...prevTodo]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (inputValue === "") {
      return;
    }

    console.log(inputValue);
    pushData(inputValue);

    setInputValue("");
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log(inputValue);
      pushData(inputValue);

      setInputValue("");
      return;
    }
  };

  return (
    <form className={!darkMode ? styles["form-light"] : styles["form-dark"]}>
      <Button buttonClick={handleFormSubmit} />
      <input
        type="text"
        className={`${styles["input-field"]} ${
          !darkMode ? styles["input-field-light"] : styles["input-field-dark"]
        }`}
        placeholder="Create a new todo..."
        value={inputValue}
        onChange={handleInputValueChange}
        onKeyDown={handleEnterKeyPress}
      />
    </form>
  );
};

export default Form;
