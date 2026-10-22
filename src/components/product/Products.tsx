"use client"
import { useGetAllProducts } from '@/hooks/products/useGetAllProducts'
import ProductsTable from './ProductsTable';
import { ProductSkeleton } from './ui/SkeletonProducts';

const Products = () => {
  const {data, error, isLoading} = useGetAllProducts()  
  
  return (
    <div className='products container'>
      <button className='table__add-button'>Add product</button>
      {isLoading && !data ? <ProductSkeleton/> : !isLoading && !data ? "error":  <ProductsTable data={data}/>}
     
    </div>
  )
}

export default Products