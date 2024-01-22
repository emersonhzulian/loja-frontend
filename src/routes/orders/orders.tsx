import { Link, useLoaderData, Form, redirect } from "react-router-dom";
import { Api } from "../../apiClient/Api";
import {
  ClientDTO,
  EnumOrderStatus,
  OrderDTO,
} from "../../apiClient/data-contracts";
import { OrderComponent } from "../../components/order/orderComponent";

export async function loader({ request, params }): Promise<OrderDTO[]> {
  const url = new URL(request.url);
  const status = url.searchParams.get("status")
    ? Number(url.searchParams.get("status"))
    : EnumOrderStatus.Open;

  const api = Api.Instance;
  const orders = (await api.ordersList({ EnumOrderStatus: status })).data;
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
          <Link to={`/comandas/${order.id}/editar`}>Editar</Link> <br></br>
          <Link to={`/comandas/${order.id}/produtos`}>Colocar produto</Link>
          <br></br>
          <br></br>
        </div>
      ))}

      <Link to={`/comandas/criar`}>Criar Comanda</Link>
    </>
  );
}
