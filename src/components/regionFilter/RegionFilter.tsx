import React from "react";
import { Region } from "../../types/country";

interface RegionFilterProps {
  onSelectRegion: (region: Region | "") => void;
}

const RegionFilter: React.FC<RegionFilterProps> = ({ onSelectRegion }) => {
  return (
    <select
      onChange={(e) => onSelectRegion(e.target.value as Region | "")}
      className="p-2 outline-none rounded-md shadow-sm dark:bg-gray-700 dark:text-white"
    >
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default RegionFilter;
