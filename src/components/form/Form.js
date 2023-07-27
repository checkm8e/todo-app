import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Button from "../UI/Button";

import styles from "./Form.module.css";

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValueChange = (event) => {
    setInputValue(event.target.value);
  };

  const pushData = (data) => {
    const value = {
      task: data,
      completed: false,
    };

    localStorage.setItem(uuidv4(), JSON.stringify(value));
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
