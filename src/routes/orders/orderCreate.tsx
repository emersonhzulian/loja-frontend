import { useLoaderData, Form, redirect } from "react-router-dom";
import { Api } from "../../apiClient/Api";
import {
  ClientDTO,
  EnumOrderStatus,
  OrderDTO,
} from "../../apiClient/data-contracts";
import { OrderCreateComponent } from "../../components/order/orderCreateComponent";
import BackButton from "../../components/backButton";

export async function loader({
  request,
  params,
}): Promise<{ clients: ClientDTO[]; selectedId?: number }> {
  const url = new URL(request.url);
  const search = Number(url.searchParams.get("clienteId"));
  let selectedId = search ? search : undefined;

  const api = Api.Instance;
  const clients = (await api.clientsList()).data;

  if (!clients.find((x) => x.id == selectedId)) selectedId = undefined;
  return { clients, selectedId };
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
  const data = useLoaderData() as {
    clients: ClientDTO[];
    selectedId?: number;
  };

  return (
    <>
      <Form method="post" id="order-form">
        <OrderCreateComponent
          clients={data.clients}
          selectedId={data.selectedId}
        />
        <button type="submit">Criar</button>
        <BackButton url="/comandas" />
      </Form>
    </>
  );
}
