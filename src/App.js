import React from "react";
import "./scss/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PizzaHomePage from "./routes/homePage/PizzaHomePage";
import NotFound from "./routes/notfound/NotFound";
import Layout from "./components-pizza/layout/Layout";
import CartPage from "./routes/cart/CartPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <PizzaHomePage />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
