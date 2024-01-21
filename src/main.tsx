import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root";
import ErrorPage from "./error-page";
import { loader as ordersLoader, Orders } from "./routes/orders/orders.tsx";
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
import {
  OrderProducts,
  loader as orderProductsLoader,
  actionDelete as orderProductsDelete,
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
import {
  OrderProductCreate,
  loader as orderProductCreateLoader,
  action as orderProductCreateAction,
} from "./routes/orderProducts/orderProductCreate.tsx";
import {
  KitchenOrders,
  loader as kitchenOrdersLoader,
} from "./routes/kitchenOrders/kitchenOrders.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "comandas/:comandaId/produtos/criar",
        element: <OrderProductCreate />,
        loader: orderProductCreateLoader,
        action: orderProductCreateAction,
      },
      {
        path: "comandas/:comandaId/produtos/:orderProductId/deletar",
        action: orderProductsDelete,
      },
      {
        path: "comandas/:comandaId/produtos",
        element: <OrderProducts />,
        loader: orderProductsLoader,
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
        element: <KitchenOrders />,
        loader: kitchenOrdersLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
