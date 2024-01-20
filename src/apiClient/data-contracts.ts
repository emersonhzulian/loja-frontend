/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ClientDTO {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

/** @format int32 */
export enum EnumKitchenOrderStatus {
  Open = 1,
  Closed = 2,
  Canceled = 3,
}

/** @format int32 */
export enum EnumOrderStatus {
  Open = 1,
  Closed = 2,
  Canceled = 3,
}

/** @format int32 */
export enum EnumProductType {
  Store = 1,
  Kitchen = 2,
}

export interface KitchenOrderDTO {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  orderProductId?: number;
  kitchenOrderStatus?: EnumKitchenOrderStatus;
  description?: string | null;
  order?: SimpleOrderDTO;
  product?: SimpleProductDTO;
  /** @format date-time */
  createdAt?: string;
}

export interface KitchenOrderStatus {
  /** @format int32 */
  id?: number;
  description?: string | null;
}

export interface OrderDTO {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  clientId?: number;
  clientName?: string | null;
  /** @format int32 */
  userId?: number;
  orderStatus?: EnumOrderStatus;
  /** @format date-time */
  createdAt?: string;
}

export interface OrderProductDTO {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  productId?: number;
  /** @format int32 */
  orderId?: number;
  /** @format double */
  price?: number;
  description?: string | null;
  /** @format date-time */
  createdAt?: string;
}

export interface OrderStatus {
  /** @format int32 */
  id?: number;
  description?: string | null;
}

export interface PaymentType {
  /** @format int32 */
  id?: number;
  description?: string | null;
}

export interface ProductDTO {
  /** @format int32 */
  id?: number;
  description?: string | null;
  /** @format double */
  suggestedPrice?: number;
  productType?: EnumProductType;
  /** @format date-time */
  createdAt?: string;
}

export interface ProductType {
  /** @format int32 */
  id?: number;
  description?: string | null;
}

export interface SimpleOrderDTO {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  clientId?: number;
}

export interface SimpleProductDTO {
  /** @format int32 */
  id?: number;
  description?: string | null;
}

export interface UserDTO {
  /** @format int32 */
  id?: number;
  name?: string | null;
}
