import { Link, useLoaderData, Form, redirect } from "react-router-dom";
import { Api } from "../../apiClient/Api";
import {
  ClientDTO,
  EnumOrderStatus,
  OrderDTO,
} from "../../apiClient/data-contracts";
import { OrderComponent } from "../../components/order/orderComponent";

export async function loader(): Promise<OrderDTO[]> {
  const api = Api.Instance;
  const orders = (
    await api.ordersList({ EnumOrderStatus: EnumOrderStatus.Open })
  ).data;
  return orders;
}

export function Orders() {
  const orders = useLoaderData() as OrderDTO[];

  return (
    <>
      <div>Comandas</div>
      <br></br>
      {orders.map((order) => (
        <div key={order.id}>
          <OrderComponent order={order} />
          <Link to={`/comandas/${order.id}`}>Editar</Link> <br></br>
          <Link to={`/comandas/${order.id}/produtos`}>Colocar produto</Link>
          <br></br>
          <br></br>
        </div>
      ))}

      <div>Criar uma Comanda</div>
      <Link to={`/comandas/criar`}>Criar</Link>
    </>
  );
}
