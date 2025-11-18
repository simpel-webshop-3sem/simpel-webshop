import { Suspense } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";
import BackButton from "./components/BackButton";
import ProductImg from "./components/ProductImg";
import CartList from "../../productlist/components/CartList";
import AddToCart from "../../productlist/components/AddToCart";
import Review from "./components/Review";

// params er et objekt som indeholder ruteparametre, i dette tilfælde id'et fra URL'en.

export default async function details({ params }) {
  const { id } = await params;

  // Hent produktdata baseret på id'et
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  //udregn mængden af stjerner
  const PoductRating = Math.round(product.rating);
  const ProductStars = [...Array(5)].map((_, index) =>
    index < PoductRating ? (
      <IoStar key={index} className="mr-1 inline text-lg text-yellow-400" />
    ) : (
      <IoStarOutline
        key={index}
        className="text-foreground mr-1 inline text-lg"
      />
    ),
  );

  // console.log(product);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen">
        <main className="mt-20 mr-80 px-4 py-8 sm:px-6 lg:px-32">
          <BackButton />
          <CartList />

          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="flex">
                <ProductImg product={product} />
              </div>

              <div className="flex flex-col justify-between space-y-6">
                <div>
                  <h1 className="mb-2 font-sans text-4xl leading-tight font-bold text-black">
                    {product.title}
                  </h1>
                  {product.brand ? (
                    <h2 className="mb-3 font-sans text-2xl font-bold text-gray-600">
                      {product.brand}
                    </h2>
                  ) : (
                    <h2 className="mb-3 font-sans text-2xl font-bold text-gray-600">
                      {product.category}
                    </h2>
                  )}
                  <div className="mb-4 flex items-center gap-2">
                    <div>{ProductStars}</div>
                    <span className="text-sm text-gray-600">
                      ({product.rating})
                    </span>
                  </div>
                  <p className="mb-6 font-sans text-3xl font-bold text-black">
                    ${product.price}
                  </p>
                  <p className="font-inter text-lg leading-relaxed text-gray-700">
                    {product.description}
                  </p>
                </div>
                <div className="flex flex-col rounded-full bg-gray-200 transition-all hover:bg-gray-400">
                  <AddToCart product={product} id={product.id} />
                </div>
              </div>
            </div>
          </div>

          <Review params={params} />
        </main>
      </div>
    </Suspense>
  );
}
