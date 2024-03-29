import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root";

import {
  OrderCreate,
  loader as orderCreateLoader,
  action as orderCreateAction,
} from "./routes/orders/orderCreate.tsx";
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
import { Order, loader as orderLoader } from "./routes/orders/order.tsx";
import { Clients, loader as clientsLoader } from "./routes/clients/clients.tsx";
import { Orders, loader as ordersLoader } from "./routes/orders/orders.tsx";
import {
  ClientCreate,
  action as clientCreateAction,
  loader as clientCreateLoader,
} from "./routes/clients/clientCreate.tsx";
import {
  Client,
  loader as clientLoader,
  actionDelete as clientDeleteAction,
} from "./routes/clients/client.tsx";
import {
  KitchenOrderEdit,
  loader as kitchenOrderEditLoader,
  action as kitchenOrderEditAction,
} from "./routes/kitchenOrders/kitchenOrderEdit.tsx";
import { ErrorPage } from "./error-page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "comandas",
        element: <Orders />,
        loader: ordersLoader,
      },
      {
        path: "comandas/criar",
        element: <OrderCreate />,
        loader: orderCreateLoader,
        action: orderCreateAction,
      },
      {
        path: "comandas/:comandaId/editar",
        element: <OrderEdit />,
        loader: orderEditLoader,
        action: orderEditAction,
      },
      {
        path: "comandas/:comandaId",
        element: <Order />,
        loader: orderLoader,
        children: [
          {
            path: "produtos",
            element: <OrderProducts />,
            loader: orderProductsLoader,
          },
          {
            path: "produtos/criar",
            element: <OrderProductCreate />,
            loader: orderProductCreateLoader,
            action: orderProductCreateAction,
          },
          {
            path: "produtos/:orderProductId/deletar",
            action: orderProductsDelete,
          },
        ],
      },
      {
        path: "clientes",
        element: <Clients />,
        loader: clientsLoader,
      },
      {
        path: "clientes/criar",
        element: <ClientCreate />,
        action: clientCreateAction,
        loader: clientCreateLoader,
      },
      {
        path: "clientes/:clienteId",
        element: <Client />,
        loader: clientLoader,
      },
      {
        path: "clientes/:clienteId/deletar",
        action: clientDeleteAction,
      },
      {
        path: "produtos",
        element: <Products />,
        loader: productsLoader,
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
        path: "pedidos",
        element: <KitchenOrders />,
        loader: kitchenOrdersLoader,
      },
      {
        path: "pedidos/:pedidoId/editar",
        element: <KitchenOrderEdit />,
        loader: kitchenOrderEditLoader,
        action: kitchenOrderEditAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
