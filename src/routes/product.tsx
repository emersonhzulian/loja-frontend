import { useLoaderData, Form, redirect } from "react-router-dom";
import { Api } from "../apiClient/Api";
import { ProductDTO } from "../apiClient/data-contracts";
import { ProductComponent } from "../components/productComponent";

export async function loader({ params }): Promise<ProductDTO> {
  const productId = params.produtoId;
  let product: ProductDTO = {
    id: 0,
  };

  if (productId && productId != 0) {
    const api = Api.Instance;
    product = (await api.productsDetail(productId)).data;
  }

  return product;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  let updatedEntity = JSON.parse(updates.oldEntity) as ProductDTO;
  updatedEntity.description = updates.description;
  updatedEntity.suggestedPrice = Number(updates.suggestedPrice);
  updatedEntity.productType = Number(updates.productType);

  const api = Api.Instance;
  if (updatedEntity.id) {
    await api.productsUpdate(updatedEntity.id ?? 0, updatedEntity);
  } else {
    updatedEntity = (await api.productsCreate(updatedEntity)).data;
  }

  return redirect(`/produtos/${updatedEntity.id}`);
}

export function Product() {
  const product = useLoaderData() as ProductDTO;

  return (
    <>
      <Form method="post" id="product-form">
        <input
          type="hidden"
          value={JSON.stringify(product)}
          name="oldEntity"
        ></input>
        <br></br>
        <ProductComponent product={product} editable={true} />
        <br></br>
        <button type="submit">{product.id != 0 ? "Editar" : "Criar"}</button>
      </Form>
    </>
  );
}
