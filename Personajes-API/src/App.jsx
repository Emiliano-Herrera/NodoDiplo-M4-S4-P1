import { useEffect, useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCharacters } from "./hooks/useCharacters";
import { ThemeContext } from "./context/ThemeContext";
import { FavoritesContext, FavoritesProvider } from "./context/FavoritesContext";
import CharacterCard from "./components/CharacterCard";
import Loader from "./components/Loader";
import ThemeButton from "./components/ThemeButton";
import FilterStatus from "./components/FilterStatus";
import Pagination from "./components/Pagination";
import FavoritesList from "./components/FavoritesList";
import { FaHeart, FaTimes } from "react-icons/fa";

function AppContent() {
  // Estados de búsqueda y personajes
  const {
    characters,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    searchCharacters,
    loadInitialCharacters,
    totalPages,
    currentPage,
  } = useCharacters();

  const { theme } = useContext(ThemeContext);
  const { favorites } = useContext(FavoritesContext); // ← para saber cuántos favoritos hay
  const [showFavorites, setShowFavorites] = useState(false);

  // Cargar personajes al iniciar
  useEffect(() => {
    loadInitialCharacters();
  }, []);

  // Manejar búsqueda
  const handleSearch = () => {
    searchCharacters(searchTerm, statusFilter, 1);
  };

  // Manejar cambio de filtro
  const handleFilterChange = (status) => {
    searchCharacters(searchTerm, status, 1);
  };

  // Manejar cambio de página
  const handlePageChange = (page) => {
    searchCharacters(searchTerm, statusFilter, page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Manejar Enter en el input
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === "dark" ? "bg-gray-900" : "bg-gray-100"
    }`}>
      
      {/* Header - Estilo Multiversal */}
      <header className={`sticky top-0 z-10 transition-colors duration-300 ${
        theme === "dark" 
          ? "bg-gray-900 border-b border-green-900/50" 
          : "bg-white border-b border-green-200 shadow-sm"
      }`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className={`text-2xl md:text-3xl font-bold tracking-wider ${
              theme === "dark"
                ? "text-green-400"
                : "text-green-600"
            }`}>
              RICK AND MORTY
            </h1>
            <div className="flex items-center gap-4">
              {/* Botón de favoritos con contador */}
              <button
                onClick={() => setShowFavorites(true)}
                className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-3 py-2 rounded-lg transition"
              >
                <FaHeart className="text-white" />
                <span className="text-white font-semibold">{favorites.length}</span>
              </button>
              <ThemeButton />
            </div>
          </div>

          <div className="mb-4 mt-4">
            <h2 className={`text-xl font-mono ${
              theme === "dark" ? "text-green-400" : "text-green-600"
            }`}>
              RICK AND MORTY API
            </h2>
            <p className={`text-xs font-mono mt-1 ${
              theme === "dark" ? "text-gray-500" : "text-gray-400"
            }`}>
              Personajes del universo de Rick and Morty
            </p>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-8">
        {/* Filtros y búsqueda */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Buscar por nombre..."
              className={`w-full px-4 py-3 rounded-lg font-mono text-sm transition-colors ${
                theme === "dark"
                  ? "bg-gray-800 text-white border border-gray-700 focus:border-green-500"
                  : "bg-gray-50 text-gray-800 border border-gray-200 focus:border-green-500"
              } focus:outline-none`}
            />
          </div>
          <FilterStatus 
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            onFilter={handleFilterChange}
          />
          <button
            onClick={handleSearch}
            className={`px-6 py-3 rounded-lg font-mono text-sm transition ${
              theme === "dark"
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-green-500 hover:bg-green-600 text-white"
            }`}
          >
            BUSCAR PERSONAJE
          </button>
        </div>

        {/* Resultados */}
        {loading && <Loader />}
        
        {error && (
          <div className={`text-center p-8 rounded-lg ${
            theme === "dark" ? "bg-red-900/50 text-red-300" : "bg-red-100 text-red-700"
          }`}>
            <p className="font-mono">ERROR: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Grid: 4 columnas en desktop, 2 en tablet, 1 en móvil */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))}
            </div>

            {/* Paginación */}
            {totalPages > 0 && (
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}

            {/* Mensaje sin resultados */}
            {characters.length === 0 && !loading && (
              <div className={`text-center p-12 rounded-lg ${
                theme === "dark" ? "bg-gray-800" : "bg-white shadow-md"
              }`}>
                <p className={`font-mono ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  NO ENTITIES FOUND IN DATABASE
                </p>
                <p className={`text-sm mt-2 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                  Try adjusting your search parameters or scanning a different dimension.
                </p>
              </div>
            )}
          </>
        )}
      </main>

      {/* Panel lateral de favoritos */}
      {showFavorites && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className={`w-full max-w-md h-full overflow-y-auto p-4 ${
            theme === "dark" ? "bg-gray-900" : "bg-white"
          }`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                Mis favoritos
              </h2>
              <button
                onClick={() => setShowFavorites(false)}
                className={`p-2 rounded-lg ${
                  theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"
                }`}
              >
                <FaTimes />
              </button>
            </div>
            <FavoritesList />
          </div>
        </div>
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme={theme === "dark" ? "dark" : "light"}
      />
    </div>
  );
}

// Envolvemos AppContent con FavoritesProvider
function App() {
  return (
    <FavoritesProvider>
      <AppContent />
    </FavoritesProvider>
  );
}

export default App;