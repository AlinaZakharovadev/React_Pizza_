import React, { useEffect, useState } from "react";
import "./scss/app.scss";
import Header from "./components-pizza/header/Header";
import Categories from "./components-pizza/categories/Categories";
import Sort from "./components-pizza/sort/Sort";
import PizzaBlock from "./components-pizza/pizza/PizzaBlock";

function App() {
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
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((obj) => (
              <PizzaBlock
                key={obj.id}
                {...obj}
                // title={obj.title}
                // price={obj.price}
                // imageUrl={obj.imageUrl}
                // sizes={obj.sizes}
                // types={obj.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
