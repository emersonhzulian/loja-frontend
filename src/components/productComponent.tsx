import {
  ClientDTO,
  EnumOrderStatus,
  EnumProductType,
  OrderDTO,
  ProductDTO,
} from "../apiClient/data-contracts";
import {
  EnumOrderStatusDescription,
  EnumProductTypeDescription,
} from "../apiClient/enum-descriptions";

export function ProductComponent({
  product,
  editable = false,
}: {
  product: ProductDTO;
  editable?: boolean;
}) {
  return (
    <>
      <div key={product.id}>
        {product.id ? `Id do Produto: ${product.id}` : ""}
        <br></br>
        Descrição:{" "}
        {editable ? (
          <input
            type="text"
            name="description"
            defaultValue={product.description ?? ""}
          ></input>
        ) : (
          product.description ?? ""
        )}
        <br></br>
        Preço Sugerido:{" "}
        {editable ? (
          <input
            type="text"
            name="suggestedPrice"
            defaultValue={product.suggestedPrice ?? ""}
          ></input>
        ) : (
          product.suggestedPrice ?? ""
        )}
        <br></br>
        {product.id ? `Horário: ${product.createdAt}` : ""}
        <br></br>
        Tipo de Produto:{" "}
        {editable ? (
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
        ) : (
          EnumProductTypeDescription(product.productType)
        )}
        <br></br>
        <br></br>
      </div>
    </>
  );
}
