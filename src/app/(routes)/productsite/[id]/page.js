import { Suspense } from "react";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import BackButton from "./components/BackButton";
import Amount from "./components/Amount";
import ProductImg from "./components/ProductImg";

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
      <IoStar key={index} className="text-foreground mr-1 inline text-lg" />
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
      <div>
        <main className="m-8">
          <BackButton />
          <div className="mt-6 flex gap-6">
            <div>
              <ProductImg product={product} />
            </div>

            <div className="flex max-h-128 flex-col justify-between">
              <div>
                <h1 className="text-foreground font-sans text-4xl font-bold">
                  {product.title}
                </h1>
                {product.brand ? (
                  <h2 className="mb-2 font-sans text-2xl font-bold text-gray-600">
                    {product.brand}
                  </h2>
                ) : (
                  <h2 className="mb-2 font-sans text-2xl font-bold text-gray-600">
                    {product.category}
                  </h2>
                )}
                <div className="mb-4">{ProductStars}</div>
                <p className="mb-4 font-sans text-xl font-bold">
                  ${product.price}
                </p>
                <p className="font-inter max-w-md text-pretty">
                  {product.description}
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 flex gap-2">
                  <Amount />
                </div>
                <button className="bg-foreground text-background mr-6 cursor-pointer self-start justify-self-end rounded-xl px-16 py-2 font-sans font-bold uppercase transition">
                  add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-20 flex w-fit gap-24">
            {mapReviews({ params })}
          </div>
        </main>
      </div>
    </Suspense>
  );
}

export async function mapReviews({ params }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  const reviews = product.reviews;

  return reviews.map((review) => (
    <div key={crypto.randomUUID()}>
      <p>
        {[...Array(5)].map((_, index) =>
          index < review.rating ? (
            <IoStar
              key={index}
              className="text-foreground mr-1 inline text-lg"
            />
          ) : (
            <IoStarOutline
              key={index}
              className="text-foreground mr-1 inline text-lg"
            />
          ),
        )}
      </p>
      <p className="w-fit max-w-40 font-bold">"{review.comment}"</p>
      <p className="font-bold text-gray-600">{review.reviewerName}</p>
    </div>
  ));
}
