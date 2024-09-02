import React, { Suspense, lazy } from "react";
import "./scss/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Layout = lazy(() =>
  import(/* webpackChunkName: "Layout" */ "./components-pizza/layout/Layout")
);
const PizzaHomePage = lazy(() =>
  import(
    /* webpackChunkName: "PizzaHomePage" */ "./routes/homePage/PizzaHomePage"
  )
);
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

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Произошла ошибка при загрузке.</div>;
    }

    return this.props.children;
  }
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ErrorBoundary>
          <Layout />
        </ErrorBoundary>
      ),
      children: [
        {
          path: "/",
          element: (
            <ErrorBoundary>
              <Suspense fallback={<div>Идет загрузка..</div>}>
                <PizzaHomePage />
              </Suspense>
            </ErrorBoundary>
          ),
        },
        {
          path: "*",
          element: (
            <ErrorBoundary>
              <Suspense fallback={<div>Идет загрузка..</div>}>
                <NotFound />
              </Suspense>
            </ErrorBoundary>
          ),
        },
        {
          path: "/cart",
          element: (
            <ErrorBoundary>
              <Suspense fallback={<div>Идет загрузка..</div>}>
                <CartPage />
              </Suspense>
            </ErrorBoundary>
          ),
        },
        {
          path: "/pizza/:id",
          element: (
            <ErrorBoundary>
              <Suspense fallback={<div>Идет загрузка..</div>}>
                <PizzaItemPage />
              </Suspense>
            </ErrorBoundary>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
