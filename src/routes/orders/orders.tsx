import { Link, useLoaderData, Form, useSubmit } from "react-router-dom";
import { Api } from "../../apiClient/Api";
import { EnumOrderStatus, OrderDTO } from "../../apiClient/data-contracts";
import { OrderComponent } from "../../components/order/orderComponent";
import { useEffect } from "react";
import type { LoaderFunction } from "react-router";

export const loader: LoaderFunction = async ({
  request,
}): Promise<{ orders: OrderDTO[]; status?: EnumOrderStatus }> => {
  const url = new URL(request.url);
  let status = url.searchParams.get("status")
    ? Number(url.searchParams.get("status"))
    : undefined;

  if (status && Object.values(EnumOrderStatus).includes(Number(status)))
    status = Number(status);
  else {
    status = EnumOrderStatus.Open;
  }

  const api = Api.Instance;
  const orders = (await api.ordersList({ EnumOrderStatus: status })).data;
  return { orders, status };
};

export function Orders() {
  const data = useLoaderData() as {
    orders: OrderDTO[];
    status?: EnumOrderStatus;
  };
  const submit = useSubmit();

  const options = [
    { value: EnumOrderStatus.Open, description: "Abertas" },
    { value: EnumOrderStatus.Closed, description: "Fechadas" },
    { value: EnumOrderStatus.Canceled, description: "Canceladas" },
  ];

  useEffect(() => {
    const input = document.getElementById("selectFilter") as HTMLInputElement;
    input.value = data?.status?.toString() as string;
  }, [data?.status]);

  return (
    <>
      <div>Comandas</div>
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
      {data?.orders?.map((order) => (
        <div key={order.id}>
          <OrderComponent order={order} />
          <Link to={`/comandas/${order.id}/editar`}>Editar</Link> <br></br>
          <Link to={`/comandas/${order.id}/produtos`}>Colocar produto</Link>
          <br></br>
          <br></br>
        </div>
      ))}

      <Link to={`/comandas/criar`}>Criar Comanda</Link>
    </>
  );
}
