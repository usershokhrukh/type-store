"use client"

import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios("https://fakestoreapi.com/products")
      return res?.data
    }
  })
}