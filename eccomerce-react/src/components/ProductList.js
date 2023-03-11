import React from "react";
import Product from "./Product";

function ProductList({ products, search, onAddToCart }) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="row">
      {filteredProducts.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={() => onAddToCart(product)}
        />
      ))}
    </div>
  );
}

export default ProductList;
