import { useState, useContext } from "react";
import { TodoContext } from "../../context/Todo-context";

import Button from "../UI/Button";

import styles from "./Form.module.css";

const Form = () => {
  const { setTodoList } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");

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
    <form>
      <Button buttonClick={handleFormSubmit} />
      <input
        type="text"
        className={styles["input-field"]}
        placeholder="Create a new todo..."
        value={inputValue}
        onChange={handleInputValueChange}
        onKeyDown={handleEnterKeyPress}
      />
    </form>
  );
};

export default Form;
