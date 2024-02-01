import { KitchenOrderDTO } from "../../apiClient/data-contracts";
import { EnumKitchenOrderStatusDescription } from "../../apiClient/enum-descriptions";

export function KitchenOrderComponent({
  order: kitchenOrder,
}: {
  order: KitchenOrderDTO;
}) {
  return (
    <>
      <div key={kitchenOrder.id}>
        Número da Comanda: {kitchenOrder.orderProduct?.order?.id}
        <br></br>
        Cliente: {kitchenOrder.orderProduct?.order?.client?.name}
        <br></br>
        Produto: {kitchenOrder.orderProduct?.product?.description}
        <br></br>
        Anotações: {kitchenOrder.description}
        <br></br>
        Status do Pedido:{" "}
        {EnumKitchenOrderStatusDescription(kitchenOrder.kitchenOrderStatus)}
        <br></br>
      </div>
    </>
  );
}
