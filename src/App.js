import React from "react";
import { useDarkMode } from "./customHooks/themeHook";

import "./styles.css";
import Article from "./components/article";
import ToggleButton from "./components/toggleButton";

export default function App() {
  const lightStyle = {
    backgroundColur: "#eaeaef",
    color: " black"
  };

  const darkStyle = {
    backgroundColor: "#232547",
    color: "#ffffff"
  };

  const [isDark, setDark] = useDarkMode(false);
  return (
    <div className="App">
      <ToggleButton isDark={isDark} setDark={setDark} />
      <Article style={isDark ? darkStyle : lightStyle} />
    </div>
  );
}
