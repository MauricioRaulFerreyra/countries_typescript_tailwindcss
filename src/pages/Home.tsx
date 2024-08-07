// src/pages/Home.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import SearchBar from "../components/searchBar/SearchBar";
import RegionFilter from "../components/regionFilter/RegionFilter";
import CountryCard from "../components/countryList/CountryCard";
import Pagination from "../components/pagination/Pagination";
import useCountries from "../hooks/useCountries";
import usePagination from "../hooks/usePagination";
import { Country } from "../types/country";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { countries, isLoading, error, handleSearch, handleRegionSelect } = useCountries();

  const { currentPage, totalPages, pageItems, changePage } = usePagination({
    totalItems: countries.length,
    itemsPerPage: 12,
  });

  const currentCountries = countries.slice(pageItems.start, pageItems.end);

  const handleCountryClick = (country: Country) => {
    navigate(`/country/${country.cca3}`);
  };

  if (isLoading)
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  if (error)
    return (
      <Layout>
        <div>Error: {error}</div>
      </Layout>
    );

  return (
    <Layout>
      <div className="mb-2 flex flex-col md:flex-row justify-between">
        <SearchBar onSearch={handleSearch} />
        <RegionFilter onSelectRegion={handleRegionSelect} />
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={changePage} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {currentCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} onClick={handleCountryClick} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
