import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { FiArrowLeft, FiHeart } from "react-icons/fi";
import Header from "@/app/components/Header";
import ProductHero from "./components/ProductHero";

// params er et objekt som indeholder ruteparametre, i dette tilfælde id'et fra URL'en.

export default async function details({ params }) {
  const { id } = await params;

  // Hent produktdata baseret på id'et
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  console.log(product);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex min-h-screen items-center justify-center bg-white font-sans">
        <main className="flex min-h-screen w-full max-w-3xl flex-col bg-white">
          <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-4xl bg-white shadow-lg">
            <Header />

            <ProductHero product={product} />

            <div className="mt-8 px-[18px]">
              <h1 className="mb-6 text-[28px] leading-[1.2] font-bold text-[#333333]">
                {product.title}
              </h1>

              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-[20px] bg-[#ACD7FF] px-3.5 py-2 text-[13px] leading-[1.2] font-medium text-[#6B8B42]">
                  {product.category}
                </span>
                <span className="rounded-[20px] bg-[#EDA8B3] px-3.5 py-2 text-[13px] leading-[1.2] font-medium text-[#6B8B42]">
                  ${product.price}
                </span>
                <span className="rounded-[20px] bg-[#C5E59C] px-3.5 py-2 text-[13px] leading-[1.2] font-medium text-[#6B8B42]">
                  Rating: {product.rating}
                </span>
                {product.brand && (
                  <span className="rounded-[20px] bg-[#F1E689] px-3.5 py-2 text-[13px] leading-[1.2] font-medium text-[#978C2F]">
                    {product.brand}
                  </span>
                )}
              </div>

              <p className="mb-4 text-[16px] leading-normal font-medium text-[#333333] opacity-75">
                {product.description}
              </p>

              <p className="mb-6 text-[13px] leading-normal font-medium text-[#333333] opacity-50">
                På lager: {product.stock} enheder
              </p>

              <button className="mb-8 flex w-full items-center justify-center rounded-[60px] bg-[#F2968F] px-2.5 py-[18px]">
                <p className="text-[16px] leading-normal font-medium text-white">
                  <span className="font-bold">Buy</span>
                  <span> {product.title}</span>
                </p>
              </button>
            </div>
          </div>
        </main>
      </div>
    </Suspense>
  );
}
