import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  container,
  mainContent,
  imageText,
  desc,
  main,
  type,
  btn_main,
  btn,
  info,
} from "./pizzaItemPage.module.scss";

function PizzaItemPage() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzaItem = async () => {
      try {
        const response = await fetch(
          `https://66bdfe8274dfc195586e41a6.mockapi.io/items/${id}`
        );
        if (!response.ok) {
          throw new Error("Ошибка при загрузке пиццы!");
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPizzaItem();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className={container}>
      <div className={mainContent}>
        <div className={imageText}>
          <img src={pizza.imageUrl} alt={pizza.title} />
          <h1>{pizza.title}</h1>
        </div>
        <div className={desc}>
          <div className={main}>
            <p>
              Цена: <strong>{pizza.price}₽</strong>
            </p>
            <p>
              Рейтинг: <strong>{pizza.rating} / 10</strong>
            </p>
          </div>
          <div className={info}>
            <h3>Размеры:</h3>
            <ul>
              {pizza.sizes.map((size, index) => (
                <li key={index}>{size} cm</li>
              ))}
            </ul>
          </div>
          <div className={type}>
            <h3>Тесто:</h3>
            <ul>
              {pizza.types.map((type, index) => (
                <li key={index}>{type === 0 ? "Тонкое" : "Традиционное"}</li>
              ))}
            </ul>
          </div>
          <div className={btn_main}>
            <Link to="/" className={btn}>
              <span>Вернуться назад</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaItemPage;
