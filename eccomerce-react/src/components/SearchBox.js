import React from "react";

function SearchBox({ value, onChange }) {
  return (
    <div className="form-group mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search products"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBox;
