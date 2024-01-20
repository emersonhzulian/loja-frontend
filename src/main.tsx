import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, loader as rootLoader } from "./routes/root";
import ErrorPage from "./error-page";
import {
  loader as ordersLoader,
  createOrder,
  Orders,
} from "./routes/orders.tsx";
import Kitchen from "./routes/kitchen.tsx";
import {
  editOrder,
  Order,
  loader as orderLoader,
} from "./components/order.tsx";

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
        action: createOrder,
      },
      {
        path: "comandas/:comandaId",
        element: <Order />,
        loader: orderLoader,
        action: editOrder,
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
