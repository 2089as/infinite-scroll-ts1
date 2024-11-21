import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={input}
      onChange={handleSearch}
      placeholder="Search Items"
    />
  );
};

export default SearchBar;
