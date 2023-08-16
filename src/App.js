import React from "react";
import Heading from "./components/header/Heading";
import Form from "./components/form/Form";
import TodoList from "./components/todos/TodoList";
import { TodoProvider } from "./context/Todo-context";

import "./App.css";

function App() {
  return (
    <div className="image">
      <main className="app">
        <Heading />
        <TodoProvider>
          <Form />
          <TodoList />
        </TodoProvider>
      </main>
    </div>
  );
}

export default App;
