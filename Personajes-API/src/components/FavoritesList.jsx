import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { ThemeContext } from "../context/ThemeContext";
import { FaTrash, FaHeart, FaTrashAlt } from "react-icons/fa";

function FavoritesList() {
  const { favorites, removeFromFavorites, clearFavorites } =
    useContext(FavoritesContext);
  const { theme } = useContext(ThemeContext);

  if (favorites.length === 0) {
    return (
      <div
        className={`rounded-lg p-6 text-center transition-colors ${
          theme === "dark" ? "bg-gray-800" : "bg-white shadow-md"
        }`}
      >
        <FaHeart
          className={`text-4xl mx-auto mb-2 ${
            theme === "dark" ? "text-gray-600" : "text-gray-300"
          }`}
        />
        <p className={theme === "dark" ? "text-gray-400" : "text-gray-500"}>
          No tienes personajes favoritos
        </p>
        <p
          className={`text-sm mt-1 ${
            theme === "dark" ? "text-gray-500" : "text-gray-400"
          }`}
        >
          Agrega tus personajes favoritos
        </p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-lg p-6 transition-colors ${
        theme === "dark" ? "bg-gray-800" : "bg-white shadow-md"
      }`}
    >
      <div
        className={`flex justify-between items-center mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}
      >
        <h2 className="text-xl font-bold flex items-center gap-2">
          <FaHeart className="text-red-500" />
          Favoritos ({favorites.length})
        </h2>
        <button
          onClick={clearFavorites}
          className="text-red-400 hover:text-red-300 text-sm flex items-center gap-1 transition"
        >
          <FaTrashAlt /> Eliminar todos
        </button>
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto">
        {favorites.map((character) => (
          <div
            key={character.id}
            className={`flex items-center gap-3 p-3 rounded-lg transition ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <img
              src={character.image}
              alt={character.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <p
                className={`font-semibold ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                {character.name}
              </p>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {character.species}
              </p>
            </div>
            <button
              onClick={() => removeFromFavorites(character.id)}
              className="text-red-400 hover:text-red-300 transition"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesList;
