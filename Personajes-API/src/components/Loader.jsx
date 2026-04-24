import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Loader() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col justify-center items-center py-12">
      <div className={`animate-spin rounded-full h-12 w-12 border-2 border-t-transparent ${
        theme === "dark" ? "border-green-500" : "border-green-600"
      }`}></div>
      <p className={`mt-4 font-mono text-sm ${theme === "dark" ? "text-green-400" : "text-green-600"}`}>
        ACCESSING DATABASE...
      </p>
    </div>
  );
}

export default Loader;