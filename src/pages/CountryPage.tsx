// src/pages/CountryPage.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import CountryDetails from "../components/countryDetails/CountryDetails";
import useCountryDetails from "../hooks/useCountryDetails";

const CountryPage: React.FC = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const navigate = useNavigate();
  const { country, isLoading, error } = useCountryDetails(countryCode || "");

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
  if (!country)
    return (
      <Layout>
        <div>Country not found</div>
      </Layout>
    );

  return (
    <Layout>
      <button onClick={() => navigate("/")} className="mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        ← Back to All Countries
      </button>
      <CountryDetails country={country} />
    </Layout>
  );
};

export default CountryPage;
