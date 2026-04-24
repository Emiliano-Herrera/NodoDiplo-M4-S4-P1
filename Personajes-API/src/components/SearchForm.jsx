import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSearch } from "react-icons/fa";

function SearchForm({ onSearch, loading }) {
  const [name, setName] = useState("");
  const [count, setCount] = useState(20);
  const { theme } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onSearch(name, count);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`rounded-lg p-6 mb-8 transition-colors ${
      theme === "dark" ? "bg-gray-800" : "bg-white shadow-md"
    }`}>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className={`block mb-2 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}>
            Nombre del personaje
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej: Rick, Morty, Summer..."
            className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
              theme === "dark"
                ? "bg-gray-700 text-white border-gray-600 focus:border-blue-500"
                : "bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500"
            }`}
            required
          />
        </div>
        
        <div>
          <label className={`block mb-2 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}>
            Cantidad de resultados
          </label>
          <select
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
              theme === "dark"
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-gray-50 text-gray-800 border-gray-300"
            }`}
          >
            <option value={5}>5 personajes</option>
            <option value={10}>10 personajes</option>
            <option value={20}>20 personajes</option>
            <option value={50}>50 personajes</option>
          </select>
        </div>
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <FaSearch />
        {loading ? "Buscando..." : "Buscar personajes"}
      </button>
    </form>
  );
}

export default SearchForm;