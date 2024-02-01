import { ProductDTO } from "../../apiClient/data-contracts";
import { EnumProductTypeDescription } from "../../apiClient/enum-descriptions";

export function ProductComponent({ product }: { product: ProductDTO }) {
  return (
    <>
      <div key={product.id}>
        Id do Produto: {product.id}
        <br></br>
        Descrição: {product.description}
        <br></br>
        Preço Sugerido: {product.suggestedPrice}
        <br></br>
        Horário: {product.createdAt}
        <br></br>
        Tipo de Produto: {EnumProductTypeDescription(product.productType)}
        <br></br>
        <br></br>
      </div>
    </>
  );
}
