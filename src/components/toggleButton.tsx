import React from "react";

import "./toggleButton.styles.css";

const ToggleButton = ({ setDark, isDark }) => {
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
