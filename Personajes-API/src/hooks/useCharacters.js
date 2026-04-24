import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export function useCharacters() {
  const [characters, setCharacters] = useState([]); // Datos de la API
  const [loading, setLoading] = useState(false); // Estado de carga
  const [error, setError] = useState(null); // Mensaje de Error
  const [totalPages, setTotalPages] = useState(0); // Total de pag
  const [currentPage, setCurrentPage] = useState(1); // Pag actual
  const [searchTerm, setSearchTerm] = useState(""); // termino de busqueda
  const [statusFilter, setStatusFilter] = useState(""); // filtro de estado

  // Función para buscar personajes con paginación y filtro
  const searchCharacters = useCallback(async (name = "", status = "", page = 1) => {
    setLoading(true);
    setError(null);
    setCurrentPage(page);

    try {
      // Construir la URL con parámetros
      let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
      
      
      if (name.trim()) {
        url += `&name=${encodeURIComponent(name)}`;
      }
      
      if (status) {
        url += `&status=${status}`;
      }

      const response = await axios.get(url);
      
      setCharacters(response.data.results);
      setTotalPages(response.data.info.pages);
      
      toast.success(`Encontrados ${response.data.results.length} personajes`);
      
    } catch (err) {
      if (err.response?.status === 404) {
        setError("No se encontraron personajes");
        setCharacters([]);
        setTotalPages(0);
        toast.error("No se encontraron personajes");
      } else {
        setError("Error al conectar con la API");
        toast.error("Error al conectar con el servidor");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // Función para cargar la primera página al iniciar
  const loadInitialCharacters = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://rickandmortyapi.com/api/character/?page=1");
      setCharacters(response.data.results);
      setTotalPages(response.data.info.pages);
      setCurrentPage(1);
    } catch (err) {
      setError("Error al cargar personajes");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
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
    setCurrentPage,
  };
}