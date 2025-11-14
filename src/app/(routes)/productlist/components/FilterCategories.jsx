import { Suspense } from "react";
import CategoryElement from "./CategoryElement";

const FilterCategories = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading categories...</div>}>
        <FetchCategories />
      </Suspense>
    </div>
  );
};

export default FilterCategories;

const FetchCategories = async () => {
  "use server";

  const response = await fetch("https://dummyjson.com/products/category-list");
  const categories = await response.json();

  return <CategoryElement categories={categories} />;
};
