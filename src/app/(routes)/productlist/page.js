import Link from "next/link";

export default async function ProductList() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;

  return (
    <div>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <Link href={`/productsite/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
