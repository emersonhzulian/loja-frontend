import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, loader as rootLoader } from "./routes/root";
import ErrorPage from "./error-page";
import {
  loader as ordersLoader,
  action as ordersAction,
  Orders,
} from "./routes/orders.tsx";
import Kitchen from "./routes/kitchen.tsx";
import {
  Order,
  loader as orderLoader,
  action as orderAction,
} from "./routes/order.tsx";
import {
  OrdersHistory,
  loader as ordersHistoryLoader,
} from "./routes/orders-history.tsx";
import "./index.css";
import { Products, loader as productsLoader } from "./routes/products.tsx";
import {
  Product,
  loader as productLoader,
  action as productAction,
} from "./routes/product.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "comandas",
        element: <Orders />,
        loader: ordersLoader,
        action: ordersAction,
      },
      {
        path: "comandas/:comandaId",
        element: <Order />,
        loader: orderLoader,
        action: orderAction,
      },
      {
        path: "produtos",
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "produtos/:produtoId",
        element: <Product />,
        loader: productLoader,
        action: productAction,
      },

      {
        path: "comandas-historico",
        element: <OrdersHistory />,
        loader: ordersHistoryLoader,
      },
      {
        path: "cozinha",
        element: <Kitchen />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
