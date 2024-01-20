import {
  Outlet,
  Link,
  useLoaderData,
  Form,
  redirect,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { Api } from "../apiClient/Api";
import {
  ClientDTO,
  EnumOrderStatus,
  OrderDTO,
} from "../apiClient/data-contracts";
import { EnumOrderStatusDescription } from "../apiClient/enum-descriptions";
import { OrderComponent } from "../components/orderComponent";

export async function loader({ request, params }): Promise<{
  order: OrderDTO;
  client: ClientDTO;
}> {
  const orderId = params.comandaId;

  let order: OrderDTO = {
    id: 0,
  };

  let client: ClientDTO = { id: 0 };

  const api = Api.Instance;
  if (orderId && orderId != 0) {
    order = (await api.ordersDetail(orderId)).data;
    client = (await api.clientsDetail(order.clientId ?? 0)).data;
  } else {
    const clientId = Number(new URL(request.url).searchParams.get("cliente"));

    client = (await api.clientsDetail(clientId ?? 0)).data;
  }

  return { order, client };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  let updatedEntity = JSON.parse(updates.oldEntity) as OrderDTO;
  updatedEntity.orderStatus = Number(updates.orderStatus);
  const api = Api.Instance;
  if (updatedEntity.id) {
    await api.ordersUpdate(updatedEntity.id ?? 0, updatedEntity);
  } else {
    updatedEntity.clientId = Number(updates.clientId);
    updatedEntity.userId = 1;
    updatedEntity = (await api.ordersCreate(updatedEntity)).data;
  }
  return redirect(`/comandas/${updatedEntity.id}`);
}

export function Order() {
  const data = useLoaderData() as {
    order: OrderDTO;
    client: ClientDTO;
  };

  return (
    <>
      <Form method="post" id="order-form">
        <input
          type="hidden"
          value={JSON.stringify(data.order)}
          name="oldEntity"
        ></input>
        <br></br>
        <OrderComponent
          order={data.order}
          client={data.client}
          editable={true}
        />
        <br></br>
        <button type="submit">{data.order.id != 0 ? "Editar" : "Criar"}</button>
      </Form>
    </>
  );
}
