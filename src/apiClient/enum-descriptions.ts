import {
  EnumKitchenOrderStatus,
  EnumOrderStatus,
  EnumProductType,
} from "./data-contracts";

export function EnumKitchenOrderStatusDescription(
  entry: EnumKitchenOrderStatus | undefined
): string {
  switch (entry) {
    case EnumKitchenOrderStatus.Open:
      return "Aberta";
    case EnumKitchenOrderStatus.Closed:
      return "Fechada";
    case EnumKitchenOrderStatus.Canceled:
      return "Cancelada";
    default:
      return "";
  }
}

export function EnumOrderStatusDescription(
  entry: EnumOrderStatus | undefined
): string {
  switch (entry) {
    case EnumOrderStatus.Open:
      return "Aberta";
    case EnumOrderStatus.Closed:
      return "Fechada";
    case EnumOrderStatus.Canceled:
      return "Cancelada";
    default:
      return "";
  }
}

export function EnumProductTypeDescription(
  entry: EnumProductType | undefined
): string {
  switch (entry) {
    case EnumProductType.Store:
      return "Loja";
    case EnumProductType.Kitchen:
      return "Cozinha";
    default:
      return "";
  }
}
