const SearchBar = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
