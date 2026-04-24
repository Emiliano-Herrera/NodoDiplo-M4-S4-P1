import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg transition-all duration-200 ${
        theme === "dark"
          ? "bg-gray-700 hover:bg-gray-600 text-yellow-400"
          : "bg-gray-200 hover:bg-gray-300 text-gray-800"
      }`}
      aria-label="Cambiar tema"
    >
      {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
}

export default ThemeButton;