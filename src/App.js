import React from "react";
import Heading from "./components/header/Heading";
import Form from "./components/form/Form";
import TodoList from "./components/todos/TodoList";
import { TodoProvider } from "./context/Todo-context";
import { DarkModePorvider } from "./context/Dark-context";
import BackgroundImage from "./components/UI/BackgroundImage";

import "./App.css";

function App() {
  return (
    <DarkModePorvider>
      <BackgroundImage>
        <main className="app">
          <Heading />
          <TodoProvider>
            <Form />
            <TodoList />
          </TodoProvider>
        </main>
      </BackgroundImage>
    </DarkModePorvider>
  );
}

export default App;
