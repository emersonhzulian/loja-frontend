import { useLoaderData, Outlet } from "react-router-dom";
import { Api } from "../../apiClient/Api";
import { OrderDTO } from "../../apiClient/data-contracts";
import { OrderComponent } from "../../components/order/orderComponent";
import BackButton from "../../components/backButton";
import type { LoaderFunction } from "react-router";

export const loader: LoaderFunction = async ({ params }): Promise<OrderDTO> => {
  const orderId = parseInt(params.comandaId ?? "");
  const api = Api.Instance;
  const order = (await api.ordersDetail(orderId)).data;
  return order;
};

export function Order() {
  const order = useLoaderData() as OrderDTO;
  return (
    <>
      <OrderComponent order={order} />
      -------------------------------
      <br></br>
      <Outlet />
      <br></br>
      -------------------------------
      <br></br>
      <BackButton url={"/comandas"}></BackButton>
    </>
  );
}
