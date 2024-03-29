import { useLoaderData, Form, redirect } from "react-router-dom";
import { Api } from "../../apiClient/Api";
import {
  EnumProductType,
  KitchenOrderDTO,
  OrderProductDTO,
  ProductDTO,
} from "../../apiClient/data-contracts";
import { OrderProductCreateComponent } from "../../components/orderProduct/orderProductCreateComponent";
import BackButton from "../../components/backButton";
import type { ActionFunction, LoaderFunction } from "react-router";

export const loader: LoaderFunction = async ({
  params,
}): Promise<{ products: ProductDTO[]; commandId: number }> => {
  const api = Api.Instance;
  const products = (await api.productsList()).data;
  return { products, commandId: Number(params.comandaId) };
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  const commandId = parseInt(params.comandaId ?? "");
  const productId = Number(updates.productId);

  let newEntity: OrderProductDTO = {
    orderId: commandId,
    productId: productId,
    price: Number(updates.price),
    description: updates.description as string,
  };
  const api = Api.Instance;
  newEntity = (await api.orderProductsCreate(newEntity)).data;

  if (Number(updates.productType) == EnumProductType.Kitchen) {
    let newEntityKitchen: KitchenOrderDTO = {
      orderProductId: newEntity.id,
      description: updates.kitchenDescription as string,
    };
    (await api.kitchenOrdersCreate(newEntityKitchen)).data;
  }

  return redirect(`/comandas/${commandId}/produtos/`);
};

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
