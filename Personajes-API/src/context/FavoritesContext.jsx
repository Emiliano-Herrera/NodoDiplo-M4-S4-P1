import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

// 1. Crear el contexto - ESTO ES LO QUE EXPORTAMOS
export const FavoritesContext = createContext();

// 2. Crear el Provider - ESTO TAMBIÉN LO EXPORTAMOS
export function FavoritesProvider({ children }) {
  // Estado de favoritos: carga desde localStorage al inicio
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Guardar en localStorage cada vez que cambian los favoritos
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Función para agregar a favoritos
  const addToFavorites = (character) => {
    // Verificar si ya existe
    const exists = favorites.find((fav) => fav.id === character.id);

    if (exists) {
      toast.info(`${character.name} ya está en favoritos`);
      return;
    }

    setFavorites([...favorites, character]);
    toast.success(`${character.name} agregado a favoritos`);
  };

  // Función para eliminar de favoritos
  const removeFromFavorites = (id) => {
    const character = favorites.find((fav) => fav.id === id);
    setFavorites(favorites.filter((fav) => fav.id !== id));
    toast.info(`${character?.name} eliminado de favoritos`);
  };

  // Función para verificar si un personaje está en favoritos
  const isFavorite = (id) => {
    return favorites.some((fav) => fav.id === id);
  };

  const clearFavorites = () => {
    setFavorites([]);
    toast.info("Todos los favoritos han sido eliminados");
  };

  // Todo lo que vamos a compartir
  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    clearFavorites,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
