import { Form, Link, redirect, useLoaderData } from "react-router-dom";
import { Api } from "../../apiClient/Api";
import {
  OrderDTO,
  OrderProductDTO,
  ProductDTO,
} from "../../apiClient/data-contracts";
import { OrderComponent } from "../../components/order/orderComponent";
import { OrderProductComponent } from "../../components/orderProduct/orderProductComponent";

export async function loader({ request, params }): Promise<{
  order: OrderDTO;
  orderProducts: OrderProductDTO[];
}> {
  const orderId = params.comandaId;
  const api = Api.Instance;
  const order = (await api.ordersDetail(orderId)).data;
  const orderProducts = (await api.orderProductsList({ OrderId: orderId }))
    .data;
  return { order, orderProducts };
}

export async function actionDelete({ params }) {
  const api = Api.Instance;
  await api.orderProductsDelete(Number(params.orderProductId));
  return redirect("/");
}

export function OrderProducts() {
  const data = useLoaderData() as {
    order: OrderDTO;
    orderProducts: OrderProductDTO[];
  };

  return (
    <>
      <OrderComponent order={data.order} />
      <br></br>
      {data.orderProducts
        ? data.orderProducts.map((orderProduct) => (
            <div key={orderProduct.id}>
              <OrderProductComponent orderProduct={orderProduct} />
              <Form
                method="post"
                action={`/comandas/${data.order.id}/produtos/${orderProduct.id}/deletar`}
                onSubmit={(event) => {
                  if (
                    !confirm("Please confirm you want to delete this record.")
                  ) {
                    event.preventDefault();
                  }
                }}
              >
                <button type="submit">Delete</button>
              </Form>
            </div>
          ))
        : ""}

      <Link to={`/comandas/${data.order.id}/produtos/criar`}>
        Adicionar Produto
      </Link>
    </>
  );
}
