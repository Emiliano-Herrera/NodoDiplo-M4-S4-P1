import { createContext, useState, useEffect } from "react";

// 1. Crear el contexto del tema
export const ThemeContext = createContext();

// 2. Crear el Provider
export function ThemeProvider({ children }) {
  // 3. Estado del tema: lee de localStorage o usa 'dark' por defecto
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark"; // 'dark' o 'light'
  });

  // 4. Guardar en localStorage y aplicar clase al HTML cuando cambia el tema
  useEffect(() => {
    localStorage.setItem("theme", theme);
    
    // Aplicar la clase 'dark' al elemento html para Tailwind
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // 5. Función para cambiar el tema
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}