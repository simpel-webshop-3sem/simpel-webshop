"use client";

import { Suspense, useState } from "react";

const ProductImg = ({ product }) => {
  const [mainImg, setMainImg] = useState(product.images[0]);
  return (
    <Suspense
      fallback={
        <div className="max-w-lg">
          <div className="flex h-128 w-lg items-center justify-center bg-gray-500 text-center">
            Loading images...
          </div>
          <div className="mt-2 h-24 w-24 bg-gray-500"></div>
        </div>
      }
    >
      <div className="max-w-lg">
        <div className="grid grid-cols-1 grid-rows-1">
          <img
            src={mainImg}
            alt={product.title}
            className="col-1 row-1 bg-gray-500 object-cover"
          />
          <p className="font-inter col-1 row-1 self-start justify-self-end rounded-bl-xl bg-[#00000080] px-4 py-2 font-semibold text-white">
            {product.availabilityStatus}
          </p>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {SmallImgs({ product, setMainImg })}
        </div>
      </div>
    </Suspense>
  );
};

export default ProductImg;

export async function SmallImgs({ product, setMainImg }) {
  return product.images.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`${product.title} ${index + 1}`}
      className="h-24 w-24 bg-gray-500 object-cover"
      onClick={() => setMainImg(img)}
    />
  ));
}
