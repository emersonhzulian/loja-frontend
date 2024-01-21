import { Link, useLoaderData } from "react-router-dom";
import { Api } from "../../apiClient/Api";
import {
  EnumKitchenOrderStatus,
  KitchenOrderDTO,
} from "../../apiClient/data-contracts";
import { OrderComponent } from "../../components/order/orderComponent";
import { KitchenOrderComponent } from "../../components/kitchenOrders/kitchenOrderComponent";

export async function loader(): Promise<KitchenOrderDTO[]> {
  const api = Api.Instance;
  const kitchenOrders = (
    await api.kitchenOrdersList({
      EnumKitchenOrderStatus: EnumKitchenOrderStatus.Open,
    })
  ).data;
  return kitchenOrders;
}

export function KitchenOrders() {
  const kitchenOrders = useLoaderData() as KitchenOrderDTO[];

  return (
    <>
      <div>Pedidos</div>
      <br></br>
      {kitchenOrders.map((kitchenOrder) => (
        <div key={kitchenOrder.id}>
          <KitchenOrderComponent order={kitchenOrder} />
          <br></br>
          <br></br>
        </div>
      ))}
    </>
  );
}
