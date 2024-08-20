import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../scss/app.scss";
import Categories from "../../components-pizza/categories/Categories";
import Sort from "../../components-pizza/sort/Sort";
import PizzaBlock from "../../components-pizza/pizza/PizzaBlock";
import Pagination from "../../components-pizza/pagination/Pagination";
import { setCategoryId, setCurrentPage } from "../../redux/slices/filterSlice";
import Skeleton from "../../components-pizza/pizza/Skeleton";
import { setItems } from "../../redux/slices/pizzasSlice";

function PizzaHomePage() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filters.categoryId);
  const currentPage = useSelector((state) => state.filters.currentPage);
  const items = useSelector((state) => state.pizzas.items);

  const [isLoading, setIsLoading] = useState(true);
  const [sortType, setSortType] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const itemsPerPage = 4;
  const totalPages = 3;

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const getUrlWithParams = useCallback(() => {
    const url = new URL("https://66bdfe8274dfc195586e41a6.mockapi.io/items");
    url.searchParams.append("sortBy", sortType);
    url.searchParams.append("order", sortOrder);
    url.searchParams.append("page", currentPage + 1);
    url.searchParams.append("limit", itemsPerPage);
    return url.toString();
  }, [sortType, sortOrder, currentPage]);

  useEffect(() => {
    const fetchPizzas = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(getUrlWithParams());
        if (response.ok) {
          const data = await response.json();
          dispatch(setItems(data));
        } else {
          console.error("Error fetching pizza data");
        }
      } catch (error) {
        console.error("Error fetching pizza data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPizzas();
  }, [getUrlWithParams, dispatch]);

  const filteredPizzas = items.filter(
    (pizza) => categoryId === 0 || pizza.category === categoryId
  );

  return (
    <div>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort
          sortType={sortType}
          sortOrder={sortOrder}
          onSortChange={(field, order) => {
            setSortType(field);
            setSortOrder(order);
          }}
        />
      </div>
      <div>
        <h2 className="content__title"></h2>
      </div>
      <div className="content__items">
        {isLoading
          ? Array.from({ length: itemsPerPage }).map((_, index) => (
              <Skeleton key={index} />
            ))
          : filteredPizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <div className="content pagination">
        <Pagination
          pageCount={totalPages}
          onPageChange={({ selected }) => dispatch(setCurrentPage(selected))}
        />
      </div>
    </div>
  );
}

export default PizzaHomePage;
