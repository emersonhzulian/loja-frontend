import { Form, Link, Outlet, redirect, useLoaderData } from "react-router-dom";
import { Api } from "../../apiClient/Api";
import {
  OrderDTO,
  OrderProductDTO,
  ProductDTO,
} from "../../apiClient/data-contracts";
import { OrderComponent } from "../../components/order/orderComponent";
import { OrderProductComponent } from "../../components/orderProduct/orderProductComponent";
import DeleteButton from "../../components/deleteButton";

export async function loader({ request, params }): Promise<{
  order: OrderDTO;
  orderProducts: OrderProductDTO[];
}> {
  const commandId = params.comandaId;
  const api = Api.Instance;
  const order = (await api.ordersDetail(commandId)).data;
  const orderProducts = (
    await api.orderProductsList({ OrderId: commandId })
  ).data.reverse();
  return { order, orderProducts };
}

export async function actionDelete({ params }) {
  const commandId = params.comandaId;
  const api = Api.Instance;
  await api.orderProductsDelete(Number(params.orderProductId));

  return redirect(`/comandas/${commandId}/produtos`);
}

export function OrderProducts() {
  const data = useLoaderData() as {
    order: OrderDTO;
    orderProducts: OrderProductDTO[];
  };

  return (
    <>
      <Link to={`/comandas/${data.order.id}/produtos/criar`}>
        Adicionar Produto
      </Link>
      {data.orderProducts
        ? data.orderProducts.map((orderProduct) => (
            <div key={orderProduct.id}>
              <OrderProductComponent orderProduct={orderProduct} />
              <DeleteButton
                action={`/comandas/${data.order.id}/produtos/${orderProduct.id}/deletar`}
              />
            </div>
          ))
        : ""}

      <Outlet />
    </>
  );
}
