"use client";

import { useRouter } from "next/navigation";

const SearchBar = ({ search }) => {
  const router = useRouter();

  const handleSearchChange = (e) => {
    const search = e.target.value;
    console.log(search);
    router.push(search ? `/productlist?search=${search}` : "/productlist");
  };
  return (
    <div>
      <input
        onChange={handleSearchChange}
        type="text"
        placeholder="Search products..."
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
