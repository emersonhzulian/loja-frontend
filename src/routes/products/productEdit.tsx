import { useLoaderData, Form, redirect } from "react-router-dom";
import { Api } from "../../apiClient/Api";
import { ProductDTO } from "../../apiClient/data-contracts";
import { ProductEditComponent } from "../../components/product/productEditComponent";

export async function loader({ params }): Promise<ProductDTO> {
  const productId = params.produtoId;
  const api = Api.Instance;
  const product = (await api.productsDetail(productId)).data;
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
  await api.productsUpdate(updatedEntity.id ?? 0, updatedEntity);

  return redirect(`/produtos`);
}

export function ProductEdit() {
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
        <ProductEditComponent product={product} />
        <br></br>
        <button type="submit">Editar</button>
      </Form>
    </>
  );
}
