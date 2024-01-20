import {
  ClientDTO,
  EnumOrderStatus,
  OrderDTO,
} from "../apiClient/data-contracts";
import { EnumOrderStatusDescription } from "../apiClient/enum-descriptions";

export function OrderComponent({
  order,
  client,
  editable = false,
}: {
  order: OrderDTO;
  client: ClientDTO;
  editable?: boolean;
}) {
  return (
    <>
      <div key={order.id}>
        {order.id ? `Número da Comanda: ${order.id}` : ""}
        <br></br>
        <input type="hidden" value={client.id} name="clientId"></input>
        Cliente: {client.name}
        <br></br>
        {order.id ? `Horário: ${order.createdAt}` : ""}
        <br></br>
        Status da comanda:{" "}
        {editable ? (
          <select name="orderStatus" defaultValue={order.orderStatus}>
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
        ) : (
          EnumOrderStatusDescription(order.orderStatus)
        )}
        <br></br>
      </div>
    </>
  );
}
