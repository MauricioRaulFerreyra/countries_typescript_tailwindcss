import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryCode" element={<CountryPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
