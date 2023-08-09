/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../interface/products";

const productAPi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API
  }),

  endpoints: (builder) => ({
    //get
    getProduct: builder.query<IProduct[], void>({
      query: () => `http://localhost:3000/products`,
    }),
    getProductId: builder.query<IProduct, number | string>({
      query: (id) => `http://localhost:3000/products/${id}`,
    }),
    addProduct: builder.mutation<IProduct, IProduct>({
      query: (product) => ({
        url: `http://localhost:3000/products`,
        method: "POST",
        body: product,
      }),
    }),
    udpateProduct: builder.mutation<IProduct, IProduct>({
      query: (product) => ({
        url: `http://localhost:3000/products/${product.id}`,
        method: "PUT",
        body: product,
      }),
    }),
    removeProduct: builder.mutation<IProduct, number | string>({
      query: (id) => ({
        url: `http://localhost:3000/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductIdQuery,
  useAddProductMutation,
  useUdpateProductMutation,
  useRemoveProductMutation,
} = productAPi;

export const productReducer = productAPi.reducer;

export default productAPi
