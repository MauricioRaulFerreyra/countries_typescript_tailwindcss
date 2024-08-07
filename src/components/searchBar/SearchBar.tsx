import React from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-[350px] outline-none p-2 rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
    />
  );
};

export default SearchBar;
