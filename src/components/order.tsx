import { Outlet, Link, useLoaderData, Form, redirect } from "react-router-dom";
import { Api } from "../apiClient/Api";
import {
  ClientDTO,
  EnumOrderStatus,
  OrderDTO,
} from "../apiClient/data-contracts";
import { EnumOrderStatusDescription } from "../apiClient/enum-descriptions";

export async function loader({ params }): Promise<{
  order: OrderDTO;
  client: ClientDTO;
}> {
  const api = Api.Instance;
  const order = (await api.ordersDetail(params.comandaId)).data;
  const client = (await api.clientsDetail(order.clientId ?? 0)).data;
  return { order, client };
}

export async function editOrder({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const updatedEntity = JSON.parse(updates.oldEntity) as OrderDTO;
  updatedEntity.orderStatus = Number(updates.orderStatus);
  const api = Api.Instance;
  await api.ordersUpdate(updatedEntity.id ?? 0, updatedEntity);
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
        <div key={data.order.id}>
          Cliente: {data.client.name}
          <br></br>
          Horário: {data.order.createdAt}
          <br></br>
          Status da comanda:
          <select name="orderStatus" defaultValue={data.order.orderStatus}>
            {Object.keys(EnumOrderStatus)
              .filter((v) => !isNaN(Number(v)))
              .map((key, index) => {
                return (
                  <option value={key} key={key}>
                    {EnumOrderStatusDescription(Number(key))}
                  </option>
                );
              })}
          </select>
          <br></br>
        </div>
        <button type="submit">Editar</button>
      </Form>
    </>
  );
}
