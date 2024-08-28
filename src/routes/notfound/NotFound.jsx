import React from "react";
import { root, main, description } from "./notFoundPage.module.scss";

function NotFound() {
  return (
    <div className={root}>
      <div className={main}>
        <span>🥺</span>
        <h1>Ничего не найдено!</h1>
        <p className={description}>
          К сожалению данная страница отсутствует в нашем интернет-магазине
        </p>
      </div>
    </div>
  );
}

export default NotFound;
