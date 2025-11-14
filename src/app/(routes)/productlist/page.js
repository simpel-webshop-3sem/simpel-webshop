import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import FilterCategories from "./components/FilterCategories";
import SearchBar from "./components/Searchbar";

export default async function ProductList({ searchParams }) {
  const params = await searchParams;
  const category = params?.category || "";

  return (
    <div>
      <div className="mb-4 flex flex-row justify-between gap-4 p-4">
        <FilterCategories />
        <SearchBar />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Suspense fallback={<div>Loading products...</div>}>
          <FetchProduct category={category} />
        </Suspense>
      </div>
    </div>
  );
}

const FetchProduct = async ({ category }) => {
  const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : `https://dummyjson.com/products/`;

  const response = await fetch(url);
  const { products } = await response.json();

  return products.map((product) => (
    <article key={product.id} className="flex flex-col bg-gray-200">
      <div className="relative aspect-square w-full bg-gray-100">
        <Image
          loading="eager"
          alt={product.title}
          src={product.thumbnail}
          fill
          className="object-cover"
        />
        {product.stock < 10 && (
          <div className="absolute top-2 right-2 bg-white px-3 py-1 text-xs font-bold text-black">
            LOW STOCK
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1 text-black">
            <h3 className="text-sm font-bold tracking-wider uppercase">
              {product.title}
            </h3>
            <p className="mt-1 text-xs tracking-wider uppercase">DESCRIPTION</p>
          </div>
          <p className="text-sm font-bold text-black">{product.price} $</p>
        </div>

        <Link href={`/productsite/${product.id}`}>
          <button className="w-full bg-gray-300 py-3 text-xs font-bold tracking-wider text-black uppercase hover:bg-gray-400">
            ADD TO CART
          </button>
        </Link>
      </div>
    </article>
  ));
};
