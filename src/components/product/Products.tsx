"use client"
import { useGetAllProducts } from '@/hooks/products/useGetAllProducts'
import ProductsTable from './ProductsTable';
import { ProductSkeleton } from './ui/SkeletonProducts';
import { useModal } from '@/context/ModalContext';
import ProductAddModal from './ProductsAddModal';

const Products = () => {
  const {data, error, isLoading} = useGetAllProducts()  

  const {setComp, setModal} = useModal();
  
  return (
    <div className='products container'>
      <button onClick={() => {
        setComp(() => () => <ProductAddModal/>)
        setModal(true)
      }} className='table__add-button'>Add product</button>
      {isLoading && !data ? <ProductSkeleton/> : !isLoading && !data ? "error":  <ProductsTable data={data}/>}
    </div>
  )
}

export default Products