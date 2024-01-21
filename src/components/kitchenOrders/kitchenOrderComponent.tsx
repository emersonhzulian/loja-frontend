import { KitchenOrderDTO, OrderDTO } from "../../apiClient/data-contracts";
import { EnumOrderStatusDescription } from "../../apiClient/enum-descriptions";

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
        Produto: {kitchenOrder.orderProduct?.product?.description}
        <br></br>
        Anotações: {kitchenOrder.description}
        <br></br>
      </div>
    </>
  );
}
