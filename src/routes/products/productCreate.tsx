import { Form, redirect } from "react-router-dom";
import { Api } from "../../apiClient/Api";
import { ProductDTO } from "../../apiClient/data-contracts";
import { ProductCreateComponent } from "../../components/product/productCreateComponent";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  let updatedEntity: ProductDTO = {
    description: updates.description,
    suggestedPrice: Number(updates.suggestedPrice),
    productType: Number(updates.productType),
  };

  const api = Api.Instance;

  updatedEntity = (await api.productsCreate(updatedEntity)).data;

  return redirect(`/produtos`);
}

export function ProductCreate() {
  return (
    <>
      <Form method="post" id="product-form">
        <br></br>
        <ProductCreateComponent />
        <br></br>
        <button type="submit">Criar</button>
      </Form>
    </>
  );
}
