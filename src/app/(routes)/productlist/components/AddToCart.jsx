"use client";
import useStore from "@/app/store/addtocart";

const AddToCart = ({ product }) => {
  const addToCart = useStore((s) => s.addToCart);
  return (
    <button
      className="w-full cursor-pointer bg-gray-300 py-3 text-xs font-bold tracking-wider text-black uppercase hover:bg-gray-400"
      onClick={() => addToCart(product)}
    >
      ADD TO CART
    </button>
  );
};

export default AddToCart;
