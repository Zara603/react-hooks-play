import React, { useState } from "react";
import "./toggleButton.styles.css";

const ToggleButton = () => {
  const [isDark, setDark] = useState(false);
  const btnClassName = [
    "toggle-btn",
    isDark ? "toggle-btn-on" : "toggle-btn-off"
  ].join(" ");

  return (
    <label style={{ display: "block" }}>
      <input
        className="toggle-input"
        type="checkbox"
        checked={isDark}
        onClick={() => setDark(!isDark)}
        data-testid="toggle-input"
      />
      <span className={btnClassName} />
    </label>
  );
};

export default ToggleButton;
