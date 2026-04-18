import React from "react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim() === "") return;
    onSearch(input.trim());
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex gap-2 w-full max-w-xl mx-auto"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite um usuário do GitHub"
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
      />

      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
