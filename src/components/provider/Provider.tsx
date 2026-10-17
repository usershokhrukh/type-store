"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

export const Provider = ({children} : {children :React.ReactNode}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5
      }
    }
  })
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default Provider