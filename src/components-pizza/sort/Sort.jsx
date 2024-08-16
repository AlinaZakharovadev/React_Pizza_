import React, { useState } from "react";

function Sort({ sortType, sortOrder, onSortChange }) {
  const handleSortChange = (event) => {
    const { name, value } = event.target;
    onSortChange(
      name === "sortBy" ? value : sortType,
      name === "order" ? value : sortOrder
    );
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
      </div>
      <div className="sort__popup">
        <select name="sortBy" value={sortType} onChange={handleSortChange}>
          <option value="title">названию</option>
          <option value="price">цене</option>
        </select>
        <select name="order" value={sortOrder} onChange={handleSortChange}>
          <option value="asc">возрастанию</option>
          <option value="desc">убыванию</option>
        </select>
      </div>
    </div>
  );
}

export default Sort;
