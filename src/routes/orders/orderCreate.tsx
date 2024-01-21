import { useLoaderData, Form, redirect } from "react-router-dom";
import { Api } from "../../apiClient/Api";
import {
  ClientDTO,
  EnumOrderStatus,
  OrderDTO,
} from "../../apiClient/data-contracts";
import { OrderCreateComponent } from "../../components/order/orderCreateComponent";

export async function loader({ request, params }): Promise<ClientDTO[]> {
  const api = Api.Instance;
  const clients = (await api.clientsList()).data;
  return clients;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  let newEntity: OrderDTO = {
    orderStatus: Number(EnumOrderStatus.Open),
    userId: 1,
    clientId: Number(updates.clientId),
  };

  const api = Api.Instance;

  newEntity = (await api.ordersCreate(newEntity)).data;

  return redirect(`/comandas/${newEntity.id}`);
}

export function OrderCreate() {
  const clients = useLoaderData() as ClientDTO[];

  return (
    <>
      <Form method="post" id="order-form">
        <input hidden value={"teste1"} name="careca"></input>
        <input hidden value={"teste2"}></input>
        <OrderCreateComponent clients={clients} />
        <button type="submit">Criar</button>
      </Form>
    </>
  );
}
