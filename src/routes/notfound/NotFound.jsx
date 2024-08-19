import React from "react";
import styles from "./notFoundPage.module.scss";

function NotFound() {
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <span>🥺</span>
        <h1>Ничего не найдено!</h1>
        <p className={styles.description}>
          К сожалению данная страница отсутствует в нашем интернет-магазине
        </p>
      </div>
    </div>
  );
}

export default NotFound;
