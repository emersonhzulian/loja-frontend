import { useLoaderData, Form, redirect, Link } from "react-router-dom";
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
import BackButton from "../../components/backButton";

export async function loader({
  request,
  params,
}): Promise<{ products: ProductDTO[]; commandId: number }> {
  const api = Api.Instance;
  const products = (await api.productsList()).data;
  return { products, commandId: Number(params.comandaId) };
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

  return redirect(`/comandas/${commandId}/produtos/`);
}

export function OrderProductCreate() {
  const data = useLoaderData() as { products: ProductDTO[]; commandId: number };

  return (
    <>
      <Form method="post" id="orderProduct-form">
        <OrderProductCreateComponent products={data.products} />
        <button type="submit">Adicionar</button>
        <BackButton
          url={`/comandas/${data.commandId}/produtos`}
          text="Cancelar"
        />
      </Form>
    </>
  );
}
