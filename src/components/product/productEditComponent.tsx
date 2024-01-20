import { EnumProductType, ProductDTO } from "../../apiClient/data-contracts";
import { EnumProductTypeDescription } from "../../apiClient/enum-descriptions";

export function ProductEditComponent({ product }: { product: ProductDTO }) {
  return (
    <>
      <div key={product.id}>
        Id do Produto: {product.id}
        <br></br>
        Descrição:{" "}
        <input
          type="text"
          name="description"
          defaultValue={product.description ?? ""}
        ></input>
        <br></br>
        Preço Sugerido:{" "}
        <input
          type="text"
          name="suggestedPrice"
          defaultValue={product.suggestedPrice ?? ""}
        ></input>
        <br></br>
        Horário: {product.createdAt}
        <br></br>
        Tipo de Produto:{" "}
        <select name="productType" defaultValue={product.productType}>
          {Object.keys(EnumProductType)
            .filter((v) => !isNaN(Number(v)))
            .map((key, index) => {
              return (
                <option value={key} key={key}>
                  {EnumProductTypeDescription(Number(key))}
                </option>
              );
            })}
        </select>
        <br></br>
        <br></br>
      </div>
    </>
  );
}
