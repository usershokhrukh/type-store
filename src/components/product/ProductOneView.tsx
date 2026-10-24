"use client";
import {useGetOneProduct} from "@/hooks/products/useGetOneProduct";
import {useParams, useRouter} from "next/navigation";
const ProductOneView = () => {
  const {id} = useParams()
  const route = useRouter();
  const {data, isPending, error} = useGetOneProduct(Number(id));
  
  console.log(data);
  
  return (
    <div className="products__one">
      <div className="products__one-top">
        <span
          onClick={() => {
            route.push("/");
          }}
          className="products__one-arr"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11V8L8 12L12 16V13H16V11H12Z"></path>
          </svg>
        </span>
      </div>

      <>
      {data && !isPending ? <div className="products__one-bottom">
          <img src={data?.image} alt={data?.title} className="products__one-image" />
          <div className="products__one-right">
            <h2 className="products__one-title">{data?.title}</h2>
            <p className="products__one-desc">
              {data?.description}
            </p>
            <p className="products__one-price">{data?.price}$</p>
            <p className="products__one-category">{data?.category}</p>
            <div className="products__one-box">
              <p className="products__one-rate">
                <span className="products__one-rate-sp">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                  </svg>
                </span>
                {data?.rating?.rate}
              </p>
              <p className="products__one-count">
                <span className="products__one-rate-sp">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"></path>
                  </svg>
                </span>
                {data?.rating?.count}
              </p>
            </div>
          </div>
        </div> : !data && isPending ? "loading..." : "error"}
        
      </>
    </div>
  );
};

export default ProductOneView;
