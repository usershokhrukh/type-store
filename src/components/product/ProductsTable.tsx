import {useDeleteProduct} from "@/hooks/products/useDeleteProduct";
import {ProductsType} from "@/type/products/ProductsType";
import Image from "next/image";
import { ProductSkeleton } from "./ui/SkeletonProducts";
import { useModal } from "@/context/ModalContext";
import ProductEditModal from "./ProductEditModal";

const ProductsTable = ({data}: {data: ProductsType[]}) => {
  const {
    mutate: deleteMutate,
    data: deleteData,
    error: deleteError,
    isPending: deletePending,
  } = useDeleteProduct();
  const {modal, setModal, setComp} = useModal()
  return (
    <>
    {
      !deletePending ?  <table className="table">
        <thead className="table__head">
          <tr className="table__row">
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table__body">
          {data?.map(({image, title, price, category, id}) => (
            <tr className="table__row table__b-row">
              <td className="table__image">
                <Image
                  className="table__image"
                  src={image}
                  width={50}
                  alt=""
                  height={50}
                />
              </td>
              <td>{title}</td>
              <td>{price}</td>
              <td>{category}</td>
              <td>
                <div className="table__box">
                  <button className="table__button">
                    <span className="table__sp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12ZM12.0003 17C14.7617 17 17.0003 14.7614 17.0003 12C17.0003 9.23858 14.7617 7 12.0003 7C9.23884 7 7.00026 9.23858 7.00026 12C7.00026 14.7614 9.23884 17 12.0003 17ZM12.0003 15C10.3434 15 9.00026 13.6569 9.00026 12C9.00026 10.3431 10.3434 9 12.0003 9C13.6571 9 15.0003 10.3431 15.0003 12C15.0003 13.6569 13.6571 15 12.0003 15Z"></path>
                      </svg>
                    </span>
                  </button>
                  <button onClick={() => {
                    setModal(true)
                    setComp(<ProductEditModal id={id}/>)
                  }} className="table__button">
                    <span className="table__sp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M7.24264 17.9967H3V13.754L14.435 2.319C14.8256 1.92848 15.4587 1.92848 15.8492 2.319L18.6777 5.14743C19.0682 5.53795 19.0682 6.17112 18.6777 6.56164L7.24264 17.9967ZM3 19.9967H21V21.9967H3V19.9967Z"></path>
                      </svg>
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      deleteMutate(id);
                    }}
                    className="table__button table__b-delete"
                  >
                    <span className="table__sp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M7 6V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7ZM9 4V6H15V4H9Z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table> : <ProductSkeleton/>
    }
     
    </>
  );
};

export default ProductsTable;
