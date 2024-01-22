import {
  ClientDTO,
  EnumOrderStatus,
  EnumProductType,
  OrderDTO,
  OrderProductDTO,
  ProductDTO,
} from "../../apiClient/data-contracts";
import {
  EnumOrderStatusDescription,
  EnumProductTypeDescription,
} from "../../apiClient/enum-descriptions";

export function OrderProductComponent({
  orderProduct,
}: {
  orderProduct: OrderProductDTO;
}) {
  return (
    <>
      <div key={orderProduct.id}>
        <input
          type="hidden"
          value={orderProduct.id}
          name="orderProductId"
        ></input>
        Id da venda: {orderProduct.id}
        <br></br>
        Produto: {orderProduct.product?.description}
        <br></br>
        Tipo Produto:{" "}
        {EnumProductTypeDescription(orderProduct.product?.productType)}
        <br></br>
        Preço: {orderProduct.price}
        <br></br>
        {orderProduct.description
          ? `Descrição: ${orderProduct.description} <br></br>`
          : ""}
        Horário: {orderProduct.createdAt}
        <br></br>
        <br></br>
      </div>
    </>
  );
}
