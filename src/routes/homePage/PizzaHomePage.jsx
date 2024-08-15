import React, { useEffect, useState } from "react";
import "../../scss/app.scss";
import Categories from "../../components-pizza/categories/Categories";
import Sort from "../../components-pizza/sort/Sort";
import PizzaBlock from "../../components-pizza/pizza/PizzaBlock";

function PizzaHomePage() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://66bdfe8274dfc195586e41a6.mockapi.io/items")
      .then((response) => response.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching pizza data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? (
          <p>Загрузка...</p>
        ) : (
          pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
        )}
      </div>
    </div>
  );
}

export default PizzaHomePage;
