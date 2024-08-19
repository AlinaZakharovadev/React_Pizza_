import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSort } from "../../redux/slices/filterSlice";

function Sort({ sortType, sortOrder, onSortChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSortChange = (event) => {
    const { name, value } = event.target;
    const newSortType = name === "sortBy" ? value : sortType;
    const newSortOrder = name === "order" ? value : sortOrder;
    dispatch(setSort({ sortProperty: newSortType, order: newSortOrder }));
    onSortChange(newSortType, newSortOrder);
  };

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="sort">
      <div className="sort__label" onClick={togglePopup}>
        <b>Сортировка по:</b>
        <span className="sort__arrow">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
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
      )}
    </div>
  );
}

export default Sort;
