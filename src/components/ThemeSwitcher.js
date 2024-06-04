import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div>
      <input
        onChange={() => setIsDarkMode(!isDarkMode)}
        type="checkbox"
        className="checkbox"
        id="checkbox"
      />
      <label htmlFor="checkbox" className="checkbox-label">
        <span className="ball"></span>
      </label>
    </div>
  );
}
