import { Form, Link, useLoaderData, useSubmit } from "react-router-dom";
import { Api } from "../../apiClient/Api";
import {
  EnumKitchenOrderStatus,
  KitchenOrderDTO,
} from "../../apiClient/data-contracts";
import { KitchenOrderComponent } from "../../components/kitchenOrders/kitchenOrderComponent";
import type { LoaderFunction } from "react-router";

export const loader: LoaderFunction = async ({
  request,
}): Promise<{
  kitchenOrders: KitchenOrderDTO[];
  status?: EnumKitchenOrderStatus;
}> => {
  const url = new URL(request.url);
  let status = url.searchParams.get("status")
    ? Number(url.searchParams.get("status"))
    : undefined;

  if (status && Object.values(EnumKitchenOrderStatus).includes(Number(status)))
    status = Number(status);
  else {
    status = EnumKitchenOrderStatus.Open;
  }

  const api = Api.Instance;
  const kitchenOrders = (
    await api.kitchenOrdersList({
      EnumKitchenOrderStatus: status,
    })
  ).data;
  return { kitchenOrders, status };
};

export function KitchenOrders() {
  const data = useLoaderData() as {
    kitchenOrders: KitchenOrderDTO[];
    status?: EnumKitchenOrderStatus;
  };
  const submit = useSubmit();

  const options = [
    { value: EnumKitchenOrderStatus.Open, description: "Abertos" },
    { value: EnumKitchenOrderStatus.Closed, description: "Fechados" },
    { value: EnumKitchenOrderStatus.Canceled, description: "Cancelados" },
  ];

  return (
    <>
      <div>Pedidos</div>
      <Form id="search-form" role="search">
        <select
          id="selectFilter"
          name="status"
          defaultValue={data.status}
          onChange={(event) => {
            submit(event.currentTarget.form);
          }}
        >
          {options.map((key) => {
            return (
              <option value={key.value} key={key.value}>
                {key.description}
              </option>
            );
          })}
        </select>
      </Form>
      <br></br>
      {data?.kitchenOrders.map((kitchenOrder) => (
        <div key={kitchenOrder.id}>
          <KitchenOrderComponent order={kitchenOrder} />
          <Link to={`/pedidos/${kitchenOrder.id}/editar`}>Editar</Link>{" "}
          <br></br>
          <br></br>
          <br></br>
        </div>
      ))}
    </>
  );
}
