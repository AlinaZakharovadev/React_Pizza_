import React from "react";
import "./scss/app.scss";
import Header from "./components-pizza/header/Header";
import Categories from "./components-pizza/categories/Categories";
import Sort from "./components-pizza/sort/Sort";
import PizzaBlock from "./components-pizza/pizza/PizzaBlock";
import pizzas from "./assets/pizzas.json";

function App() {
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
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                sizes={obj.sizes}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
