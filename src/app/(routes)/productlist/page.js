import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import FilterCategories from "./components/FilterCategories";
import SearchBar from "./components/Searchbar";
import Menu from "../../components/Menu";
import CartList from "../productlist/components/CartList";
import AddToCart from "../productlist/components/AddToCart";


export default async function ProductList({ searchParams }) {
  const params = await searchParams;
  const category = params?.category || "";
  const search = params?.search || "";

  return (
    <div className="min-h-screen">
      <Menu />
      <div className="pt-24 pr-[440px]">
        <div className="flex flex-row justify-between gap-4 p-4">
          <FilterCategories />
          <SearchBar />
        </div>
        <div className="grid grid-cols-3 gap-4 p-4 pt-0">
          <Suspense fallback={<div>Loading products...</div>}>
            <FetchProduct category={category} search={search} />
          </Suspense>
        </div>
      </div>
      <CartList />
    </div>
  );
}

const FetchProduct = async ({ category, search }) => {
  const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : search
      ? `https://dummyjson.com/products/search?q=${search}`
      : `https://dummyjson.com/products/`;

  console.log(url);
  const response = await fetch(url);
  const { products } = await response.json();

  return products.map((product) => (
    <article key={product.id} className="flex flex-col bg-gray-200">
      <div className="relative aspect-square w-full bg-gray-100">
        <Link href={`/productsite/${product.id}`}>
          <Image
            loading="eager"
            alt={product.title}
            src={product.thumbnail}
            fill
            className="object-cover"
          />
        </Link>
        {product.stock < 10 && (
          <div className="absolute top-2 right-2 bg-white px-3 py-1 text-xs font-bold text-black">
            LOW STOCK
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between gap-2 p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1 text-black">
            <h3 className="mb-4 text-sm font-bold tracking-wider uppercase">
              {product.title}
            </h3>
            <p className="mt-1 mb-4 text-xs tracking-normal">
              {product.description}
            </p>
          </div>
          <p className="text-sm font-bold text-black">{product.price} $</p>
        </div>
        <AddToCart product={product}  id={product.id} />
      </div>
    </article>
  ));
};
