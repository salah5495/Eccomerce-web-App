// Product.js

import React from "react";

function Product({ product, onAddToCart }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">${product.price.toFixed(2)}</p>
          <button onClick={onAddToCart} className="btn btn-primary">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
