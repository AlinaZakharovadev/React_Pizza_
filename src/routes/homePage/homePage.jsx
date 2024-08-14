import React from "react";
import PizzaBlock from "../../components-pizza/pizza/PizzaBlock";

function homePage() {
  return (
    <div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
      </div>
    </div>
  );
}

export default homePage;
