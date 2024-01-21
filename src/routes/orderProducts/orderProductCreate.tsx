import { useLoaderData, Form, redirect } from "react-router-dom";
import { Api } from "../../apiClient/Api";
import {
  ClientDTO,
  EnumOrderStatus,
  EnumProductType,
  KitchenOrderDTO,
  OrderDTO,
  OrderProductDTO,
  ProductDTO,
} from "../../apiClient/data-contracts";
import { OrderCreateComponent } from "../../components/order/orderCreateComponent";
import { OrderProductCreateComponent } from "../../components/orderProduct/orderProductCreateComponent";

export async function loader({ request, params }): Promise<ProductDTO[]> {
  const api = Api.Instance;
  const products = (await api.productsList()).data;
  return products;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  const commandId = params.comandaId;
  const productId = Number(updates.productId);

  let newEntity: OrderProductDTO = {
    orderId: commandId,
    productId: productId,
    price: Number(updates.price),
    description: updates.description,
  };
  const api = Api.Instance;
  newEntity = (await api.orderProductsCreate(newEntity)).data;

  if (Number(updates.productType) == EnumProductType.Kitchen) {
    let newEntityKitchen: KitchenOrderDTO = {
      orderProductId: newEntity.id,
      description: updates.kitchenDescription,
    };
    (await api.kitchenOrdersCreate(newEntityKitchen)).data;
  }

  return redirect(`/comandas/`);
}

export function OrderProductCreate() {
  const products = useLoaderData() as ProductDTO[];

  return (
    <>
      <Form method="post" id="orderProduct-form">
        <OrderProductCreateComponent products={products} />
        <button type="submit">Adicionar</button>
      </Form>
    </>
  );
}
