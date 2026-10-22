"use client";

import {useGetOneProduct} from "@/hooks/products/useGetOneProduct";
import {ProductsType} from "@/type/products/ProductsType";
import {useEffect, useState} from "react";

const ProductEditModal = ({id}: {id: number}) => {
  const {data, error, isPending} = useGetOneProduct(id);
  console.log(data);

  const [formData, setFormData] = useState<ProductsType>({
    title: data?.title,
    price: data?.price,
    description: data?.description,
    image: data?.image,
    id: data?.id,
    category: data?.category,
    rating: data?.rating,
  });

  useEffect(() => {
    if (data) {
      setFormData({
        title: data?.title,
        price: data?.price,
        description: data?.description,
        image: data?.image,
        id: data?.id,
        category: data?.category,
        rating: data?.rating,
      });
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent) => {
    if (e.target.name != "count") {
      setFormData({
        ...formData,
        [e.target?.name]: e.target.value,
      });
    } else if (e.target.name == "count") {
      setFormData({
        ...formData,
        rating: {
          count: Number(e.target.value),
          rate: data?.rating?.rate,
        },
      });
    }
  };

  const [imageUrl, setImageUrl] = useState<string>("");
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);

  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    let address = e.dataTransfer.getData("text/uri-list");
    if (!address) {
      address = e.dataTransfer.getData("text/plain");
    }
    console.log(address);
    
    setImageUrl(address);
  };

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//   e.preventDefault();
//   setIsDragging(false);

//   // 1. First priority: Try to grab pure link arrays from the browser
//   let address = e.dataTransfer.getData("text/uri-list");

//   // 2. Second priority: If text/uri-list is blank, read text/plain
//   if (!address) {
//     const plainText = e.dataTransfer.getData("text/plain");

//     // If the dropped item is a direct web link, use it
//     if (plainText.startsWith("http://") || plainText.startsWith("https://")) {
//       address = plainText;
//     } 
//     // If it's a piece of HTML text from a page, check if an img tag is inside it
//     else {
//       const htmlText = e.dataTransfer.getData("text/html");
//       if (htmlText) {
//         // Use a temporary browser element to parse the HTML string safely
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(htmlText, "text/html");
//         const imgElement = doc.querySelector("img");
//         if (imgElement && imgElement.src) {
//           address = imgElement.src;
//         }
//       }
//     }
//   }

//   // 3. Fallback: If a user drops a local file item from their desktop files
//   if (!address && e.dataTransfer.files.length > 0) {
//     const file = e.dataTransfer.files[0];
//     if (file.type.startsWith("image/")) {
//       // Creates a temporary local web address pointer for the image asset
//       address = URL.createObjectURL(file);
//     }
//   }

//   // Set state if a clean web address string was found
//   if (address) {
//     console.log("Clean Image Address Found:", address);
//     setImageUrl(address);
//   } else {
//     console.error("The item dropped could not be resolved to an image link address.");
//   }
// };

  // useEffect(() => {
  //   if (data && !imageUrl) {
  //     setImageUrl(data?.image);
  //   }
  // }, [data]);

  return (
    <form className="form" action="">
      <>
        {data && !isPending && !error ? (
          <>
            <input
              onChange={handleChange}
              name="title"
              value={formData?.title}
              className="form__input"
              type="text"
              placeholder="title"
            />
            <input
              onChange={handleChange}
              name="price"
              value={formData?.price}
              className="form__input"
              type="number"
              placeholder="price"
            />
            <textarea
              onChange={handleChange}
              name="description"
              id=""
              placeholder="description"
              className="form__input form__textarea"
              value={formData?.description}
            ></textarea>
            <select
              onChange={handleChange}
              value={formData?.category}
              className="form__input"
              name="category"
              id=""
            >
              <option value={formData?.category}>{formData?.category}</option>
            </select>
            <input
              onChange={handleChange}
              name="count"
              value={formData?.rating?.count}
              className="form__input"
              type="number"
              placeholder="count"
            />
            <div
            onDragOver={handleDragOver}
              onDrop={handleDrop}
              
              className={`form__drop`}
            >
              <div  className={`form__img-cont  ${isDragging ? "form__drop-active" : ""}`}>
                {imageUrl && !isPending ? (
                  <img src={imageUrl} alt="" className="form__img" />
                ) : !imageUrl && isPending ? (
                  "loading..."
                ) : (
                  "no image"
                )}
              </div>
              <span className="form__cancel">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                </svg>
              </span>
            </div>
            <button className="form__submit" type="submit">
              edit
            </button>
          </>
        ) : !data && isPending ? (
          "loading..."
        ) : (
          "error"
        )}
      </>
    </form>
  );
};

export default ProductEditModal;
