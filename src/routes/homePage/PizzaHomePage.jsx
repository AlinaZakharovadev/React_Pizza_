import React, { useEffect, useState, useCallback } from "react";
import "../../scss/app.scss";
import Categories from "../../components-pizza/categories/Categories";
import Sort from "../../components-pizza/sort/Sort";
import PizzaBlock from "../../components-pizza/pizza/PizzaBlock";
import Pagination from "../../components-pizza/pagination/Pagination";

function PizzaHomePage() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const totalPages = 3;

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
          setPizzas(data);
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
  }, [getUrlWithParams]);

  const filteredPizzas = pizzas.filter(
    (pizza) => categoryId === 0 || pizza.category === categoryId
  );

  return (
    <div>
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(i) => setCategoryId(i)}
        />
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
        {isLoading ? (
          <p>Идет Загрузка...</p>
        ) : (
          filteredPizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
        )}
      </div>
      <div className="content pagination">
        <Pagination
          pageCount={totalPages}
          onPageChange={({ selected }) => setCurrentPage(selected)}
        />
      </div>
    </div>
  );
}

export default PizzaHomePage;
