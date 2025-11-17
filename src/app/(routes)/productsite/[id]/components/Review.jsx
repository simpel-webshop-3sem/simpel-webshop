import { IoStar, IoStarOutline } from "react-icons/io5";

export default async function Review({ params }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  const reviews = product.reviews;

  return (
    <div className="mt-16 w-full">
      <h2 className="mb-8 text-3xl font-bold">Customer reviews</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={`${review.reviewerName}-${index}`}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-xl"
          >
            <div className="mb-4 flex items-center gap-1">
              {[...Array(5)].map((_, index) =>
                index < review.rating ? (
                  <IoStar key={index} className="text-xl text-yellow-400" />
                ) : (
                  <IoStarOutline
                    key={index}
                    className="text-xl text-gray-300"
                  />
                ),
              )}
              <span className="ml-2 text-sm font-semibold text-gray-700">
                {review.rating}/5
              </span>
            </div>

            <p className="mb-4 leading-relaxed text-gray-700 italic">
              "{review.comment}"
            </p>

            <div className="flex items-center justify-between border-t border-gray-100 pt-4">
              <p className="font-semibold text-gray-900">
                {review.reviewerName}
              </p>
            </div>

            <div className="absolute inset-0 -z-10 bg-linear-to-br from-yellow-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
