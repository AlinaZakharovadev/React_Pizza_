import React from "react";
import "./scss/app.scss";
import Header from "./components-pizza/header/Header";
import Categories from "./components-pizza/categories/Categories";
import Sort from "./components-pizza/sort/Sort";
import Pizza from "./components-pizza/pizza/Pizza";

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
