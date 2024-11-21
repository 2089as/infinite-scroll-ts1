import React, { useState } from "react";
import SearchBar from "./components/searchBar";
import ProductList from "./components/productList";

const App: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <SearchBar onSearch={setQuery} />
      <ProductList query={query} />
    </div>
  );
};

export default App;
