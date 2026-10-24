import { ProductsType } from "@/type/products/ProductsType"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export const useAddProduct = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: Omit<ProductsType, "id">) => {
      const res = await axios.post(`https://fakestoreapi.com/products`, data)
      return res?.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["products"]})
    }
  })
}