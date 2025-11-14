import { Suspense } from "react";

// params er et objekt som indeholder ruteparametre, i dette tilfælde id'et fra URL'en.

export default async function details({ params }) {
  const { id } = await params;

  // Hent produktdata baseret på id'et
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  console.log(product);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <main>
          <div>
            <img src={product.thumbnail} alt={product.title} />

            <div>
              <h1>{product.title}</h1>

              <div>
                <span>{product.category}</span>
                <span>${product.price}</span>
                <span>Rating: {product.rating}</span>
                {product.brand && <span>{product.brand}</span>}
              </div>

              <p>{product.description}</p>

              <p>På lager: {product.stock} enheder</p>

              <button>
                <span>Buy</span>
                <span> {product.title}</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </Suspense>
  );
}
