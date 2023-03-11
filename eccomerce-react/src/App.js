// App.js

import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import ProductList from "./components/ProductList";
import products from "./products";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setTotal(total + product.price);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="container mt-4">
      <SearchBox value={search} onChange={handleSearchChange} />
      <ProductList
        products={products}
        search={search}
        onAddToCart={handleAddToCart}
      />
      <div className="text-center mt-4">
        <h5>Total: ${total.toFixed(2)}</h5>
      </div>
    </div>
  );
}

export default App;
