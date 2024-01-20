import { OrderDTO } from "../../apiClient/data-contracts";
import { EnumOrderStatusDescription } from "../../apiClient/enum-descriptions";

export function OrderComponent({ order }: { order: OrderDTO }) {
  return (
    <>
      <div key={order.id}>
        Número da Comanda: {order.id}
        <br></br>
        <input type="hidden" value={order.clientId} name="clientId"></input>
        Cliente: {order.clientName}
        <br></br>
        Horário: ${order.createdAt}
        <br></br>
        Status da comanda: {EnumOrderStatusDescription(order.orderStatus)}
        <br></br>
      </div>
    </>
  );
}
