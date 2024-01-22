import { useLoaderData, Form, redirect } from "react-router-dom";
import { Api } from "../../apiClient/Api";
import { KitchenOrderDTO, OrderDTO } from "../../apiClient/data-contracts";
import { OrderComponent } from "../../components/order/orderComponent";
import { OrderEditComponent } from "../../components/order/orderEditComponent";
import BackButton from "../../components/backButton";
import { KitchenOrderEditComponent } from "../../components/kitchenOrders/kitchenOrderEditComponent";

export async function loader({ params }): Promise<KitchenOrderDTO> {
  const api = Api.Instance;
  const pedido = (await api.kitchenOrdersDetail(params.pedidoId)).data;
  return pedido;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  let updatedEntity = JSON.parse(updates.oldEntity) as KitchenOrderDTO;
  updatedEntity.kitchenOrderStatus = Number(updates.orderStatus);
  updatedEntity.description = updates.description;

  const api = Api.Instance;
  await api.kitchenOrdersUpdate(updatedEntity.id ?? 0, updatedEntity);

  return redirect(`/pedidos`);
}

export function KitchenOrderEdit() {
  const kitchenOrder = useLoaderData() as KitchenOrderDTO;

  return (
    <>
      <Form method="post" id="kitchen-form">
        <input
          type="hidden"
          value={JSON.stringify(kitchenOrder)}
          name="oldEntity"
        ></input>

        <KitchenOrderEditComponent kitchenOrder={kitchenOrder} />

        <button type="submit">Editar</button>
        <BackButton url={`/pedidos`} />
      </Form>
    </>
  );
}
