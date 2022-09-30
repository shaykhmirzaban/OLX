import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import BoilerPlate from "./components/BoilerPlate";
import Home from "./components/Home";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<BoilerPlate />}>
          <Route index element={<Home />} />
          <Route path="result/:productName/:companyName" element={<SearchResult />} />
        </Route>
      </Routes>
    </React.StrictMode>
  );
}

export default App;
