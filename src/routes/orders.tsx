import {
  Outlet,
  Link,
  useLoaderData,
  Form,
  redirect,
  useLocation,
} from "react-router-dom";
import { Api } from "../apiClient/Api";
import {
  ClientDTO,
  EnumOrderStatus,
  OrderDTO,
} from "../apiClient/data-contracts";
import { EnumOrderStatusDescription } from "../apiClient/enum-descriptions";

export async function loader(): Promise<{
  orders: OrderDTO[];
  clients: ClientDTO[];
}> {
  const api = Api.Instance;
  const orders = (
    await api.ordersList({ EnumOrderStatus: EnumOrderStatus.Open })
  ).data;
  const clients = (await api.clientsList()).data;
  return { orders, clients };
}

export async function createOrder({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  const api = Api.Instance;
  await api.ordersCreate({ clientId: 1, userId: updates.clientId });
  return redirect(`/comandas`);
}

export function Orders() {
  const data = useLoaderData() as {
    orders: OrderDTO[];
    clients: ClientDTO[];
  };

  return (
    <>
      <div>Comandas</div>
      <br></br>
      {data.orders.map((order) => (
        <div key={order.id}>
          Comanda: {order.id}
          <br></br>
          Cliente: {data.clients.find((x) => x.id == order.clientId)?.name}
          <br></br>
          Horário: {order.createdAt}
          <br></br>
          Status da comanda: {EnumOrderStatusDescription(order.orderStatus)}
          <br></br>
          <Link to={`/comandas/${order.id}`}>Editar</Link>
          <br></br>
          <br></br>
        </div>
      ))}
      <div>Criar uma Comanda</div>
      <Form method="post" id="order-form">
        <select name="clientId">
          {data.clients.map((client) => (
            <option value={client.id?.toString()} key={client.name?.toString()}>
              {client.name?.toString()}
            </option>
          ))}
        </select>
        <button type="submit">New</button>
      </Form>
    </>
  );
}
