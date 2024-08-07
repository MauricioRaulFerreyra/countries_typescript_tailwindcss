// src/components/CountryList/CountryList.tsx
import React from "react";
import { Country } from "../../types/country";
import CountryCard from "./CountryCard";

interface CountryListProps {
  countries: Country[];
  onCountryClick: (country: Country) => void;
}

const CountryList: React.FC<CountryListProps> = ({ countries, onCountryClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} onClick={() => onCountryClick(country)} />
      ))}
    </div>
  );
};

export default CountryList;
