import { EnumProductType } from "../../apiClient/data-contracts";
import { EnumProductTypeDescription } from "../../apiClient/enum-descriptions";

export function ProductCreateComponent() {
  return (
    <>
      <div key={0}>
        Descrição:
        <input type="text" name="description" defaultValue=""></input>
        <br></br>
        Preço Sugerido:{" "}
        <input type="text" name="suggestedPrice" defaultValue=""></input>
        <br></br>
        <br></br>
        Tipo de Produto:
        <select name="productType" defaultValue={EnumProductType.Store}>
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
