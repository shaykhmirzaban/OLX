import React from "react";

// components
import Cover from "./Cover";
import Cards from "./Cards";

function Home() {
  return (
    <React.StrictMode>
      <Cover />
      <Cards />
    </React.StrictMode>
  );
}

export default Home;
