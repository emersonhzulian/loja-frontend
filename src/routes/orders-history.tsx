import { Link, useLoaderData, Form, redirect } from "react-router-dom";
import { Api } from "../apiClient/Api";
import { ClientDTO, OrderDTO } from "../apiClient/data-contracts";
import { EnumOrderStatusDescription } from "../apiClient/enum-descriptions";
import { OrderComponent } from "../components/orderComponent";

export async function loader(): Promise<{
  orders: OrderDTO[];
  clients: ClientDTO[];
}> {
  const api = Api.Instance;
  const orders = (await api.ordersList()).data;
  const clients = (await api.clientsList()).data;
  return { orders, clients };
}
export function OrdersHistory() {
  const data = useLoaderData() as {
    orders: OrderDTO[];
    clients: ClientDTO[];
  };

  return (
    <>
      <div>Comandas</div>
      <br></br>
      {data.orders.map((order) => (
        <>
          <OrderComponent
            order={order}
            client={
              data.clients.find((x) => x.id == order.clientId) as ClientDTO
            }
          />
          <Link to={`/comandas/${order.id}`}>Editar</Link>
          <br></br>
          <br></br>
        </>
      ))}
    </>
  );
}
