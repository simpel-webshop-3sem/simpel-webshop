"use client";
import useStore from "@/app/store/addtocart";
import BackButton from "../productsite/[id]/components/BackButton";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";

export default function CartPage() {
  const cart = useStore((s) => s.cart);
  const removeFromCart = useStore((s) => s.removeFromCart);
  const total = cart.reduce((sum, i) => sum + (i.price || 0) * (i.qty || 1), 0);
  return (
    <div className="p-6">
      <BackButton />
      <div className="bg-gray-200 p-4">
        <h2 className="mb-4 text-sm font-bold tracking-wider text-black uppercase">
          Shopping Cart
        </h2>

        <div className="flex flex-col gap-4">
          <ul className="flex flex-col gap-2">
            {cart.length === 0 && (
              <li className="text-xs tracking-wider text-black uppercase">
                Cart is empty
              </li>
            )}
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between text-xs tracking-wider text-black uppercase"
              >
                <Image
                  loading="eager"
                  alt={item.title}
                  src={item.thumbnail}
                  width={100}
                  height={100}
                  className="object-cover"
                ></Image>
                <span className="flex-1 pr-2">
                  {item.title} × {item.qty || 1}
                </span>
                <span className="w-16 text-right">
                  ${(item.price * (item.qty || 1)).toFixed(2)}
                </span>
                <button
                  className="ml-2 bg-red-300 px-2 py-1 hover:bg-red-400"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrashAlt className="text-xs text-white" />
                </button>
              </li>
            ))}
          </ul>

          <div className="border-t border-gray-400 pt-4">
            <div className="flex justify-between">
              <span className="text-sm font-bold tracking-wider text-black uppercase">
                Total
              </span>
              <span className="text-sm font-bold text-black">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
          <button
            className="w-full bg-gray-300 py-3 text-xs font-bold tracking-wider text-black uppercase hover:bg-gray-400 disabled:opacity-50"
            disabled={!cart.length}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
