"use client"

import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetOneProduct = (id: number) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: async ({queryKey}) => {
      const [,id] = queryKey
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
      return res?.data;
    }
  })
}