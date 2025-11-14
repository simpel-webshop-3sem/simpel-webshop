import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

const ProductList = ({ category }) => {
  //   "use cache";
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <FetchProduct category={category} />
    </Suspense>
  );
};

// FetchProduct component to fetch and display products

const FetchProduct = async ({ category }) => {
  //   if (!products || products.length === 0) {
  //     return <p>No products available.</p>;
  //   }

  const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : `https://dummyjson.com/products/`;

  const response = await fetch(url);
  const { products } = await response.json();
  console.log(products);

  return products.map((product) => (
    <Link href={`/details/${product.id}`} key={product.id}>
      <article className="relative overflow-hidden rounded-2xl bg-white shadow-[0px_4px_16px_0px_rgba(19,21,68,0.06)]">
        <div className="relative h-[250px] w-full overflow-hidden rounded-t-2xl">
          <Image
            className="h-full w-full object-cover"
            loading="eager"
            alt={product.title}
            src={product.thumbnail}
            width={160}
            height={114}
          />

          <div className="absolute top-2 right-2 h-6 w-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
                fill="white"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>

        <div className="items-left mt-2 flex flex-col justify-around gap-2 p-4">
          <h3 className="font-bold text-black">{product.title}</h3>
          <h4 className="mb-4 text-gray-500">
            {product.brand ? product.brand : "Unknown Brand"}
          </h4>
          <p className="text-md text-right font-bold text-black">
            ${product.price}
          </p>
        </div>
      </article>
    </Link>
  ));
};

export default ProductList;
