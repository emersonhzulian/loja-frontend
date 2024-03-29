import { useLoaderData, Form, redirect } from "react-router-dom";
import { Api } from "../../apiClient/Api";
import { OrderDTO } from "../../apiClient/data-contracts";
import { OrderEditComponent } from "../../components/order/orderEditComponent";
import BackButton from "../../components/backButton";
import type { ActionFunction, LoaderFunction } from "react-router";

export const loader: LoaderFunction = async ({ params }): Promise<OrderDTO> => {
  const orderId = parseInt(params.comandaId ?? "");
  const api = Api.Instance;
  const order = (await api.ordersDetail(orderId)).data;
  return order;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  let updatedEntity = JSON.parse(updates.oldEntity as string) as OrderDTO;
  updatedEntity.orderStatus = Number(updates.orderStatus);

  const api = Api.Instance;
  await api.ordersUpdate(updatedEntity.id ?? 0, updatedEntity);

  return redirect(`/comandas`);
};

export function OrderEdit() {
  const order = useLoaderData() as OrderDTO;

  return (
    <>
      <Form method="post" id="order-form">
        <input
          type="hidden"
          value={JSON.stringify(order)}
          name="oldEntity"
        ></input>

        <OrderEditComponent order={order} />

        <button type="submit">Editar</button>
        <BackButton url={`/comandas`} />
      </Form>
    </>
  );
}
