import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const { theme } = useContext(ThemeContext);

  // Calcular qué páginas mostrar (máximo 10)
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 10;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  if (totalPages === 0) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {/* Botón Anterior */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-lg transition disabled:opacity-50 ${
          theme === "dark"
            ? "bg-gray-800 text-gray-400 hover:bg-gray-700"
            : "bg-gray-200 text-gray-600 hover:bg-gray-300"
        }`}
      >
        <FaChevronLeft />
      </button>

      {/* Números de página */}
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-lg font-mono transition-all duration-200 ${
            currentPage === page
              ? "bg-green-600 text-white shadow-lg"
              : theme === "dark"
                ? "bg-gray-800 text-gray-400 hover:bg-gray-700"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Botón Siguiente */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-lg transition disabled:opacity-50 ${
          theme === "dark"
            ? "bg-gray-800 text-gray-400 hover:bg-gray-700"
            : "bg-gray-200 text-gray-600 hover:bg-gray-300"
        }`}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
