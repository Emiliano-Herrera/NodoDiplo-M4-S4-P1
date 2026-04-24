import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function FilterStatus({ statusFilter, setStatusFilter, onFilter }) {
  const { theme } = useContext(ThemeContext);

  const statuses = [
    { value: "", label: "All Statuses", color: "gray" },
    { value: "alive", label: "ALIVE", color: "green" },
    { value: "dead", label: "DEAD", color: "red" },
    { value: "unknown", label: "UNKNOWN", color: "yellow" },
  ];

  const handleStatusChange = (status) => {
    setStatusFilter(status);
    onFilter(status);
  };

  return (
    <div className="flex gap-2">
      {statuses.map((status) => (
        <button
          key={status.value}
          onClick={() => handleStatusChange(status.value)}
          className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-200 ${
            statusFilter === status.value
              ? `bg-${status.color}-600 text-white shadow-lg`
              : theme === "dark"
                ? "bg-gray-800 text-gray-400 hover:bg-gray-700"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          {status.label}
        </button>
      ))}
    </div>
  );
}

export default FilterStatus;
