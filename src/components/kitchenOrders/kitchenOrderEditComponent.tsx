import {
  EnumKitchenOrderStatus,
  KitchenOrderDTO,
} from "../../apiClient/data-contracts";
import { EnumKitchenOrderStatusDescription } from "../../apiClient/enum-descriptions";

export function KitchenOrderEditComponent({
  kitchenOrder,
}: {
  kitchenOrder: KitchenOrderDTO;
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
        Anotações:{" "}
        <input
          type="text"
          name="description"
          defaultValue={kitchenOrder?.description || ""}
        ></input>
        <br></br>
        Status do Pedido:{" "}
        <select
          name="orderStatus"
          defaultValue={kitchenOrder.kitchenOrderStatus}
        >
          {Object.keys(EnumKitchenOrderStatus)
            .filter((v) => !isNaN(Number(v)))
            .map((key) => {
              return (
                <option value={key} key={key}>
                  {EnumKitchenOrderStatusDescription(Number(key))}
                </option>
              );
            })}
        </select>
        <br></br>
      </div>
    </>
  );
}
