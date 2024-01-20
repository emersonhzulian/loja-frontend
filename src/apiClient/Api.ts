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

import {
  ClientDTO,
  EnumKitchenOrderStatus,
  EnumOrderStatus,
  EnumProductType,
  KitchenOrderDTO,
  KitchenOrderStatus,
  OrderDTO,
  OrderProductDTO,
  OrderStatus,
  PaymentType,
  ProductDTO,
  ProductType,
  UserDTO,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  private static _instance: Api;

  private constructor() {
    super({ baseUrl: "http://localhost:5000" });
  }

  public static get Instance() {
    // Do you need arguments? Make it a regular static method instead.
    return this._instance || (this._instance = new this());
  }

  /**
   * No description
   *
   * @tags Clients
   * @name ClientsList
   * @request GET:/api/Clients
   */
  clientsList = (
    query?: {
      Name?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<ClientDTO[], any>({
      path: `/api/Clients`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Clients
   * @name ClientsCreate
   * @request POST:/api/Clients
   */
  clientsCreate = (data: ClientDTO, params: RequestParams = {}) =>
    this.request<ClientDTO, any>({
      path: `/api/Clients`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Clients
   * @name ClientsDetail
   * @request GET:/api/Clients/{id}
   */
  clientsDetail = (id: number, params: RequestParams = {}) =>
    this.request<ClientDTO, any>({
      path: `/api/Clients/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Clients
   * @name ClientsUpdate
   * @request PUT:/api/Clients/{id}
   */
  clientsUpdate = (id: number, data: ClientDTO, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Clients/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Clients
   * @name ClientsDelete
   * @request DELETE:/api/Clients/{id}
   */
  clientsDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Clients/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags KitchenOrderStatus
   * @name KitchenOrderStatusList
   * @request GET:/api/KitchenOrderStatus
   */
  kitchenOrderStatusList = (params: RequestParams = {}) =>
    this.request<KitchenOrderStatus[], any>({
      path: `/api/KitchenOrderStatus`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags KitchenOrderStatus
   * @name KitchenOrderStatusDetail
   * @request GET:/api/KitchenOrderStatus/{id}
   */
  kitchenOrderStatusDetail = (id: number, params: RequestParams = {}) =>
    this.request<KitchenOrderStatus, any>({
      path: `/api/KitchenOrderStatus/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags KitchenOrders
   * @name KitchenOrdersList
   * @request GET:/api/KitchenOrders
   */
  kitchenOrdersList = (
    query?: {
      /** @format int32 */
      OrderId?: number;
      EnumKitchenOrderStatus?: EnumKitchenOrderStatus;
    },
    params: RequestParams = {}
  ) =>
    this.request<KitchenOrderDTO[], any>({
      path: `/api/KitchenOrders`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags KitchenOrders
   * @name KitchenOrdersCreate
   * @request POST:/api/KitchenOrders
   */
  kitchenOrdersCreate = (data: KitchenOrderDTO, params: RequestParams = {}) =>
    this.request<KitchenOrderDTO, any>({
      path: `/api/KitchenOrders`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags KitchenOrders
   * @name KitchenOrdersDetail
   * @request GET:/api/KitchenOrders/{id}
   */
  kitchenOrdersDetail = (id: number, params: RequestParams = {}) =>
    this.request<KitchenOrderDTO, any>({
      path: `/api/KitchenOrders/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags KitchenOrders
   * @name KitchenOrdersUpdate
   * @request PUT:/api/KitchenOrders/{id}
   */
  kitchenOrdersUpdate = (
    id: number,
    data: KitchenOrderDTO,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/KitchenOrders/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags KitchenOrders
   * @name KitchenOrdersDelete
   * @request DELETE:/api/KitchenOrders/{id}
   */
  kitchenOrdersDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/KitchenOrders/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags OrderProducts
   * @name OrderProductsList
   * @request GET:/api/OrderProducts
   */
  orderProductsList = (
    query?: {
      /** @format int32 */
      OrderId?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<OrderProductDTO[], any>({
      path: `/api/OrderProducts`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags OrderProducts
   * @name OrderProductsCreate
   * @request POST:/api/OrderProducts
   */
  orderProductsCreate = (data: OrderProductDTO, params: RequestParams = {}) =>
    this.request<OrderProductDTO, any>({
      path: `/api/OrderProducts`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags OrderProducts
   * @name OrderProductsDetail
   * @request GET:/api/OrderProducts/{id}
   */
  orderProductsDetail = (id: number, params: RequestParams = {}) =>
    this.request<OrderProductDTO, any>({
      path: `/api/OrderProducts/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags OrderProducts
   * @name OrderProductsUpdate
   * @request PUT:/api/OrderProducts/{id}
   */
  orderProductsUpdate = (
    id: number,
    data: OrderProductDTO,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/OrderProducts/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags OrderProducts
   * @name OrderProductsDelete
   * @request DELETE:/api/OrderProducts/{id}
   */
  orderProductsDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/OrderProducts/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags OrderStatus
   * @name OrderStatusList
   * @request GET:/api/OrderStatus
   */
  orderStatusList = (params: RequestParams = {}) =>
    this.request<OrderStatus[], any>({
      path: `/api/OrderStatus`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags OrderStatus
   * @name OrderStatusDetail
   * @request GET:/api/OrderStatus/{id}
   */
  orderStatusDetail = (id: number, params: RequestParams = {}) =>
    this.request<OrderStatus, any>({
      path: `/api/OrderStatus/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Orders
   * @name OrdersList
   * @request GET:/api/Orders
   */
  ordersList = (
    query?: {
      /** @format int32 */
      ClientId?: number;
      /** @format int32 */
      UserId?: number;
      EnumOrderStatus?: EnumOrderStatus;
    },
    params: RequestParams = {}
  ) =>
    this.request<OrderDTO[], any>({
      path: `/api/Orders`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Orders
   * @name OrdersCreate
   * @request POST:/api/Orders
   */
  ordersCreate = (data: OrderDTO, params: RequestParams = {}) =>
    this.request<OrderDTO, any>({
      path: `/api/Orders`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Orders
   * @name OrdersDetail
   * @request GET:/api/Orders/{id}
   */
  ordersDetail = (id: number, params: RequestParams = {}) =>
    this.request<OrderDTO, any>({
      path: `/api/Orders/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Orders
   * @name OrdersUpdate
   * @request PUT:/api/Orders/{id}
   */
  ordersUpdate = (id: number, data: OrderDTO, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Orders/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Orders
   * @name OrdersDelete
   * @request DELETE:/api/Orders/{id}
   */
  ordersDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Orders/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags PaymentTypes
   * @name PaymentTypesList
   * @request GET:/api/PaymentTypes
   */
  paymentTypesList = (params: RequestParams = {}) =>
    this.request<PaymentType[], any>({
      path: `/api/PaymentTypes`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags PaymentTypes
   * @name PaymentTypesDetail
   * @request GET:/api/PaymentTypes/{id}
   */
  paymentTypesDetail = (id: number, params: RequestParams = {}) =>
    this.request<PaymentType, any>({
      path: `/api/PaymentTypes/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ProductTypes
   * @name ProductTypesList
   * @request GET:/api/ProductTypes
   */
  productTypesList = (params: RequestParams = {}) =>
    this.request<ProductType[], any>({
      path: `/api/ProductTypes`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags ProductTypes
   * @name ProductTypesDetail
   * @request GET:/api/ProductTypes/{id}
   */
  productTypesDetail = (id: number, params: RequestParams = {}) =>
    this.request<ProductType, any>({
      path: `/api/ProductTypes/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsList
   * @request GET:/api/Products
   */
  productsList = (
    query?: {
      Description?: string;
      EnumProductType?: EnumProductType;
    },
    params: RequestParams = {}
  ) =>
    this.request<ProductDTO[], any>({
      path: `/api/Products`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsCreate
   * @request POST:/api/Products
   */
  productsCreate = (data: ProductDTO, params: RequestParams = {}) =>
    this.request<ProductDTO, any>({
      path: `/api/Products`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsDetail
   * @request GET:/api/Products/{id}
   */
  productsDetail = (id: number, params: RequestParams = {}) =>
    this.request<ProductDTO, any>({
      path: `/api/Products/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsUpdate
   * @request PUT:/api/Products/{id}
   */
  productsUpdate = (id: number, data: ProductDTO, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Products/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Products
   * @name ProductsDelete
   * @request DELETE:/api/Products/{id}
   */
  productsDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Products/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersList
   * @request GET:/api/Users
   */
  usersList = (
    query?: {
      Name?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<UserDTO[], any>({
      path: `/api/Users`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersCreate
   * @request POST:/api/Users
   */
  usersCreate = (data: UserDTO, params: RequestParams = {}) =>
    this.request<UserDTO, any>({
      path: `/api/Users`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersDetail
   * @request GET:/api/Users/{id}
   */
  usersDetail = (id: number, params: RequestParams = {}) =>
    this.request<UserDTO, any>({
      path: `/api/Users/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersUpdate
   * @request PUT:/api/Users/{id}
   */
  usersUpdate = (id: number, data: UserDTO, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Users/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersDelete
   * @request DELETE:/api/Users/{id}
   */
  usersDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/Users/${id}`,
      method: "DELETE",
      ...params,
    });
}
