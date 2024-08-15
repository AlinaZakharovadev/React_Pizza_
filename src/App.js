import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./scss/app.scss";
import Header from "./components-pizza/header/Header";
import PizzaHomePage from "./routes/homePage/PizzaHomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PizzaHomePage />,
    },
    // Add more
  ]);

  return (
    <div className="wrapper">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
