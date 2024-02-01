import { EnumOrderStatus, OrderDTO } from "../../apiClient/data-contracts";
import { EnumOrderStatusDescription } from "../../apiClient/enum-descriptions";

export function OrderEditComponent({ order }: { order: OrderDTO }) {
  return (
    <>
      <div key={order.id}>
        Número da Comanda: {order.id}
        <br></br>
        <input type="hidden" value={order.clientId} name="clientId"></input>
        Cliente: {order.client?.name}
        <br></br>
        Horário: ${order.createdAt}
        <br></br>
        Status da comanda:{" "}
        <select name="orderStatus" defaultValue={order.orderStatus}>
          {Object.keys(EnumOrderStatus)
            .filter((v) => !isNaN(Number(v)))
            .map((key) => {
              return (
                <option value={key} key={key}>
                  {EnumOrderStatusDescription(Number(key))}
                </option>
              );
            })}
        </select>
        <br></br>
      </div>
    </>
  );
}
