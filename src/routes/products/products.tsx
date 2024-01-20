import { Link, useLoaderData } from "react-router-dom";
import { Api } from "../../apiClient/Api";
import { ProductDTO } from "../../apiClient/data-contracts";
import { ProductComponent } from "../../components/product/productComponent";

export async function loader(): Promise<ProductDTO[]> {
  const api = Api.Instance;
  const products = (await api.productsList()).data;

  return products;
}

export function Products() {
  const data = useLoaderData() as ProductDTO[];

  return (
    <>
      <div>Produtos</div>
      <br></br>
      {data.map((product) => (
        <div key={product.id}>
          <ProductComponent product={product} />
          <Link to={`/produtos/${product.id}`}>Editar</Link>
          <br></br>
          <br></br>
        </div>
      ))}

      <div>Criar um produto</div>
      <Link to={`/produtos/criar`}>Criar</Link>
    </>
  );
}
