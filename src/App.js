import React, { Suspense, lazy } from "react";
import "./scss/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components-pizza/layout/Layout";
import PizzaHomePage from "./routes/homePage/PizzaHomePage";

const NotFound = lazy(() =>
  import(/* webpackChunkName: "NotFound" */ "./routes/notfound/NotFound")
);
const CartPage = lazy(() =>
  import(/* webpackChunkName: "CartPage" */ "./routes/cart/CartPage")
);
const PizzaItemPage = lazy(() =>
  import(
    /* webpackChunkName: "PizzaItemPage" */ "./routes/pizzaItemPage/PizzaItemPage"
  )
);

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
          element: (
            <Suspense fallback={<div>Идет загрузка..</div>}>
              <NotFound />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: (
            <Suspense fallback={<div>Идет загрузка..</div>}>
              <CartPage />
            </Suspense>
          ),
        },
        {
          path: "/pizza/:id",
          element: (
            <Suspense fallback={<div>Идет загрузка..</div>}>
              <PizzaItemPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
