import { ProductsType } from "@/type/products/ProductsType"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export const useEditProduct = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (payload: [number, ProductsType]) => {
      const res = await axios.patch(`https://fakestoreapi.com/products/${payload[0]}`,payload[1])
      return res?.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["products"]})
    }
  })
}