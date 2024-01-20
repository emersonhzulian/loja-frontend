import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, loader as rootLoader } from "./routes/root";
import ErrorPage from "./error-page";
import { loader as ordersLoader, Orders } from "./routes/orders/orders.tsx";
import Kitchen from "./routes/kitchen.tsx";
import {
  OrderCreate,
  loader as orderCreateLoader,
  action as orderCreateAction,
} from "./routes/orders/orderCreate.tsx";
import {
  OrdersHistory,
  loader as ordersHistoryLoader,
} from "./routes/orders-history.tsx";
import "./index.css";
import {
  Products,
  loader as productsLoader,
} from "./routes/products/products.tsx";
import {
  loader as productEditLoader,
  action as productEditAction,
  ProductEdit,
} from "./routes/products/productEdit.tsx";
import { Product } from "./routes/products/Product.tsx";
import {
  OrderProducts,
  loader as orderProductsLoader,
  action as orderProductsAction,
} from "./routes/orderProducts/orderProducts.tsx";
import {
  OrderEdit,
  loader as orderEditLoader,
  action as orderEditAction,
} from "./routes/orders/orderEdit.tsx";
import {
  ProductCreate,
  action as productCreateAction,
} from "./routes/products/productCreate.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "comandas/:comandaId/produtos",
        element: <OrderProducts />,
        loader: orderProductsLoader,
        action: orderProductsAction,
      },

      {
        path: "comandas",
        element: <Orders />,
        loader: ordersLoader,
      },
      {
        path: "produtos",
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "comandas/criar",
        element: <OrderCreate />,
        loader: orderCreateLoader,
        action: orderCreateAction,
      },
      {
        path: "comandas/:comandaId",
        element: <OrderEdit />,
        loader: orderEditLoader,
        action: orderEditAction,
      },
      {
        path: "produtos/criar",
        element: <ProductCreate />,
        action: productCreateAction,
      },
      {
        path: "produtos/:produtoId",
        element: <ProductEdit />,
        loader: productEditLoader,
        action: productEditAction,
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
