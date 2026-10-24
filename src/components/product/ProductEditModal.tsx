"use client";

import {useModal} from "@/context/ModalContext";
import {useEditProduct} from "@/hooks/products/useEditProduct";
import {useGetOneProduct} from "@/hooks/products/useGetOneProduct";
import {ProductsType} from "@/type/products/ProductsType";
import {useEffect, useRef, useState} from "react";

const ProductEditModal = ({id}: {id: number}) => {
  const {data, error, isPending} = useGetOneProduct(id);
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
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

  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const processFile = (file: File) => {
    if (!file || !file.type?.startsWith("image/")) return;
    setPreview(URL.createObjectURL(file));
    setIsDragging(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setIsDragging(true);
    processFile(e.dataTransfer.files[0]);
  };

  useEffect(() => {
    if (data) {
      setPreview(data?.image);
    }
  }, [data]);

  const handleImageRemove = () => {
    setPreview(data?.image);
  };

  useEffect(() => {
    setFormData({
      ...formData,
      image: String(preview),
    });
  }, [preview]);

  const {mutate, data: editData, isPending: editPending} = useEditProduct();

  const {setDisable, setModal} = useModal();

  useEffect(() => {
    if (!editData && editPending) {
      setDisable(true);
    }
  }, [editData, editPending]);

  useEffect(() => {
    if (editData) {
      setDisable(false);
      setModal(false);
    }
  }, [editData]);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if(formData?.category)
      mutate([id, formData])
      setDisable(true)
    }catch(error: unknown) {
      if(error instanceof Error) {
        throw new Error(error.message)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form" action="">
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
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`form__drop`}
            >
              <input
                onChange={handleInputChange}
                style={{display: "none"}}
                type="file"
                ref={fileInputRef}
              />
              <div
                className={`form__img-cont  ${isDragging ? "form__drop-active" : ""}`}
                onClick={handleContainerClick}
              >
                {preview && !isPending ? (
                  <img src={preview} alt="" className="form__img" />
                ) : !preview && isPending ? (
                  "loading..."
                ) : (
                  "no image, (drop or click)"
                )}
              </div>
              {data?.image != preview ? (
                <span onClick={handleImageRemove} className="form__cancel">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                  </svg>
                </span>
              ) : null}
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
