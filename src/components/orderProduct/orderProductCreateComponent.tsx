import { useEffect, useState } from "react";
import {
  ClientDTO,
  EnumProductType,
  ProductDTO,
} from "../../apiClient/data-contracts";

export function OrderProductCreateComponent({
  products,
}: {
  products: ProductDTO[];
}) {
  const options = products.map((product) => ({
    value: product.id,
    text: product.description,
    suggestedPrice: product.suggestedPrice,
    productType: product.productType,
  }));

  const [selected, setSelected] = useState(options[0].value);
  const [suggestedPrice, setSuggestedPrice] = useState(
    options[0].suggestedPrice || 0
  );
  const [productType, setProductType] = useState(
    options[0].productType || EnumProductType.Store
  );

  return (
    <>
      <div key={0}>
        Produto:
        <select
          name="productId"
          value={selected}
          onChange={(e) => {
            const idx = e.target.selectedIndex;
            const option = e.target.querySelectorAll("option")[idx];
            const price = option.getAttribute("data-value");
            const type = option.getAttribute("data-type");

            setProductType(Number(type));
            setSuggestedPrice(Number(price));
            setSelected(Number(e.target.value));
          }}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              data-value={option.suggestedPrice}
              data-type={option.productType}
            >
              {option.text as string}
            </option>
          ))}
        </select>
        <input hidden readOnly name="productType" value={productType}></input>
        <br></br>
        <br></br>
        Preço:{" "}
        <input
          type="text"
          name="price"
          value={suggestedPrice}
          onChange={(e) =>
            Number(e.target.value)
              ? setSuggestedPrice(Number(e.target.value))
              : ""
          }
        ></input>
        <br></br>
        <br></br>
        Descrição da venda:{" "}
        <input type="text" name="description" defaultValue={""}></input>
        <br></br>
        <br></br>
        {productType == EnumProductType.Kitchen ? (
          <>
            Descrição para Cozinha:{" "}
            <input
              type="text"
              name="kitchenDescription"
              defaultValue={""}
            ></input>
            <br></br>
            <br></br>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
