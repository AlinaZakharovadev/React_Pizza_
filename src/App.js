import React from "react";
import "./scss/app.scss";
import Header from "./components-pizza/header/Header";
import Categories from "./components-pizza/categories/Categories";
import Sort from "./components-pizza/sort/Sort";
import PizzaBlock from "./components-pizza/pizza/PizzaBlock";

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
            <PizzaBlock title="Мексиканская" price={450} />
            <PizzaBlock title="Сербская" price={700} />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
            <PizzaBlock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
