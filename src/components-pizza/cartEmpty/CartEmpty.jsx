import React from "react";
import { Link } from "react-router-dom";

function CartEmpty() {
  return (
    <div class="content">
      <div class="container">
        <div className="cart--empty">
          <h2>
            Корзина пустая <icon>😕</icon>
          </h2>
          <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
          <img src="/img/empty-cart.png" alt="Empty cart" />
          <Link to="/" className="button button--black">
            <span>Вернуться назад</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartEmpty;
