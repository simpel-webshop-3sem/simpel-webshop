import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

const ProductList = ({ category }) => {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <FetchProduct category={category} />
    </Suspense>
  );
};

const FetchProduct = async ({ category }) => {
  const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : `https://dummyjson.com/products/`;

  const response = await fetch(url);
  const { products } = await response.json();

  return products.map((product) => (
    <Link href={`/productsite/${product.id}`} key={product.id}>
      <article>
        <div>
          <Image
            loading="eager"
            alt={product.title}
            src={product.thumbnail}
            width={160}
            height={114}
          />
        </div>

        <div>
          <h3>{product.title}</h3>
          <h4>{product.brand ? product.brand : "Unknown Brand"}</h4>
          <p>${product.price}</p>
        </div>
      </article>
    </Link>
  ));
};

export default ProductList;
