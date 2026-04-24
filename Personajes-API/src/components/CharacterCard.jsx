import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { ThemeContext } from "../context/ThemeContext";
import { FaHeart, FaRegHeart, FaMapMarkerAlt, FaVenusMars, FaDna } from "react-icons/fa";

function CharacterCard({ character, index }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useContext(FavoritesContext);
  const { theme } = useContext(ThemeContext);
  
  const favorite = isFavorite(character.id);

  const getStatusColor = () => {
    switch (character.status) {
      case "Alive": return "text-green-400";
      case "Dead": return "text-red-400";
      default: return "text-yellow-400";
    }
  };

  // Formatear ID para mostrar como ENTITY:XXX
  const entityId = String(character.id).padStart(3, '0');

  return (
    <div className={`rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 ${
      theme === "dark"
        ? "bg-gray-900 border border-gray-700"
        : "bg-white border border-gray-200 shadow-md"
    }`}>
      {/* Header con ENTITY ID */}
      <div className={`p-3 border-b ${
        theme === "dark" ? "border-gray-800 bg-gray-800" : "border-gray-200 bg-gray-50"
      }`}>
        <div className="flex justify-between items-center">
          <span className={`font-mono text-xs ${
            theme === "dark" ? "text-green-400" : "text-green-600"
          }`}>
            ENTITY:{entityId}
          </span>
          <button
            onClick={() => favorite ? removeFromFavorites(character.id) : addToFavorites(character)}
            className="transition"
          >
            {favorite ? (
              <FaHeart className="text-red-500 text-lg" />
            ) : (
              <FaRegHeart className={`text-lg ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Imagen */}
      <img 
        src={character.image} 
        alt={character.name}
        className="w-full h-48 object-cover"
      />

      {/* Información */}
      <div className="p-4 space-y-2">
        <h3 className={`font-bold text-lg ${
          theme === "dark" ? "text-white" : "text-gray-800"
        }`}>
          {character.name}
        </h3>
        
        <div className="flex items-center gap-2 text-sm">
          <FaDna className={theme === "dark" ? "text-gray-500" : "text-gray-400"} />
          <span className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
            {character.species}
          </span>
          <span className="text-gray-600">|</span>
          <FaVenusMars className={theme === "dark" ? "text-gray-500" : "text-gray-400"} />
          <span className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
            {character.gender}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <FaMapMarkerAlt className={theme === "dark" ? "text-gray-500" : "text-gray-400"} />
          <span className={`truncate ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            {character.location.name}
          </span>
        </div>

        <div className="flex justify-between items-center pt-2">
          <span className={`text-xs font-mono ${getStatusColor()}`}>
            {character.status.toUpperCase()}
          </span>
          <span className={`text-xs ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
            {character.episode.length} episodes
          </span>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;