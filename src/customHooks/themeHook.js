import { useState, useContext, useEffect } from "react";
import ThemeContext from "../contexts/themeContext";

export const useDarkMode = (isdarkMode) => {
  const theme = useContext(ThemeContext);
  const [isdark, setDarkMode] = useState(isdarkMode);
  useEffect(() => {
    if (isdark) {
      theme.dispatch({ type: "dark" });
    } else {
      theme.dispatch({ type: "light" });
    }
  }, [isdark, theme]);

  return [isdark, setDarkMode];
};
