"use client";

import { useRouter, useSearchParams } from "next/navigation";

const CategoryElement = ({ categories }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "";

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    router.push(
      category ? `/productlist?category=${category}` : "/productlist",
    );
  };

  return (
    <select
      value={currentCategory}
      onChange={handleCategoryChange}
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
    >
      <option value="">All Products</option>
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryElement;
