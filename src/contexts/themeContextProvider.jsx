import React, { useReducer } from "react";
import { ThemeContext } from "./themeContext";

const ThemeProvider = (props) => {
  const initialState = { isDark: false };

  const reducer = (state, action) => {
    switch (action) {
      case "set-dark": {
        return { ...state, isDark: true };
      }

      case "set-light": {
        return { ...state, isDark: false };
      }

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
