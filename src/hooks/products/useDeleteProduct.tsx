"use client"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      const res = await axios.delete(`https://fakestoreapi.com/products/${id}`)
      return res?.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["products"]})
    }
  })
}