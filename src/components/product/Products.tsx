"use client"
import { useGetAllProducts } from '@/hooks/products/useGetAllProducts'
import ProductsTable from './ProductsTable';

const Products = () => {
  const {data, error, isLoading} = useGetAllProducts()  
  return (
    <div className='products container'>
      <button className='table__add-button'>Add product</button>
      <ProductsTable data={data}/>
    </div>
  )
}

export default Products