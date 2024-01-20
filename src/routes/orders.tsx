import {
  Link,
  useLoaderData,
  Form,
  redirect,
  useSearchParams,
} from "react-router-dom";
import { Api } from "../apiClient/Api";
import {
  ClientDTO,
  EnumOrderStatus,
  OrderDTO,
} from "../apiClient/data-contracts";
import { OrderComponent } from "../components/orderComponent";

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

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  return redirect(`/comandas/0?cliente=${updates.clientId}`);
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
          <OrderComponent
            order={order}
            client={
              data.clients.find((x) => x.id == order.clientId) as ClientDTO
            }
          />
          <Link to={`/comandas/${order.id}`}>Editar</Link>
          <Link to={`/comandas/${order.id}`}>Colocar produto</Link>
          <br></br>
          <br></br>
        </div>
      ))}

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
