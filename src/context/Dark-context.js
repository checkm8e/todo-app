import { useState, createContext } from "react";

export const DarkModeContext = createContext();

export const DarkModePorvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const displayMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, displayMode }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

/*
    Context for dark-mode

    It contain a state "darkMode" which specifiy if the current mode is in dark mode or not. Default is false

    And a function to change between dark and lite mode.
*/
