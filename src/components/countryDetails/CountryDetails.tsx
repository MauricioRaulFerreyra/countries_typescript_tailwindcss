// src/components/CountryDetails/CountryDetails.tsx
import React from "react";
import { Country } from "../../types/country";
import { useNavigate } from "react-router-dom";

interface CountryDetailsProps {
  country: Country;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ country }) => {
  const navigate = useNavigate();

  return (
    <div className="grid md:grid-cols-2 gap-1">
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="w-full h-[280px]" />
      <div>
        <h1 className="text-3xl font-bold mb-4">{country.name.common}</h1>
        <p>
          <strong>Native Name:</strong> {Object.values(country.name.nativeName)[0]?.common || "N/A"}
        </p>
        <p>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
        </p>
        <p>
          <strong>Top Level Domain:</strong> {country.tld?.[0] || "N/A"}
        </p>
        <p>
          <strong>Currencies:</strong>{" "}
          {country.currencies
            ? Object.values(country.currencies)
                .map((c) => c.name)
                .join(", ")
            : "N/A"}
        </p>
        <p>
          <strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(", ") : "N/A"}
        </p>
      </div>
      {country.borders && (
        <div className="md:col-span-2 mt-8">
          <h2 className="text-xl font-bold mb-4">Border Countries:</h2>
          <div className="flex flex-wrap gap-2">
            {country.borders.map((border) => (
              <button
                key={border}
                onClick={() => navigate(`/country/${border}`)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                {border}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
