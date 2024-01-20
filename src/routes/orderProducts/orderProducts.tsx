import { useLoaderData } from "react-router-dom";
import { Api } from "../../apiClient/Api";
import {
  OrderDTO,
  OrderProductDTO,
  ProductDTO,
} from "../../apiClient/data-contracts";
import { OrderComponent } from "../../components/order/orderComponent";

export async function loader({ request, params }): Promise<{
  order: OrderDTO;
  orderProducts: OrderProductDTO[];
}> {
  const orderId = params.comandaId;
  const api = Api.Instance;
  const order = (await api.ordersDetail(orderId)).data;
  const orderProducts = (await api.orderProductsList()).data;

  return { order, orderProducts };
}

export async function action({ request, params }) {}

export function OrderProducts() {
  const data = useLoaderData() as {
    order: OrderDTO;
    products: ProductDTO[];
  };

  return (
    <>
      <OrderComponent order={data.order} />
    </>
  );
}
