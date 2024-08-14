import React from "react";
import Pizza from "../../components-pizza/pizza/Pizza";

function homePage() {
  return (
    <div>
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
  );
}

export default homePage;
