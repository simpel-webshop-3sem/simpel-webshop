"use client";
import useStore from "@/app/store/addtocart";
import Link from "next/link";
import { FaTrashAlt } from "react-icons/fa";

const CartList = () => {
  const cart = useStore((s) => s.cart);
  const removeFromCart = useStore((s) => s.removeFromCart);
  const total = cart.reduce((sum, i) => sum + (i.price || 0) * (i.qty || 1), 0);

  return (
    <div className="fixed top-40 right-0 w-md p-4">
      <div className="min-h-[500px] border-l border-black/20 pl-4">
        <div className="flex min-h-[500px] flex-col bg-gray-200 p-4">
          <h2 className="mb-4 text-sm font-bold tracking-wider text-black uppercase">
            Shopping Cart
          </h2>

          <div className="flex flex-col gap-4">
            <ul className="flex flex-col gap-2">
              {cart.length === 0 && (
                <li className="text-xs tracking-wider text-black uppercase">
                  Cart Is Empty
                </li>
              )}
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between text-xs tracking-wider text-black uppercase"
                >
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
            <Link href="/cart" passHref>
              <button
                className="w-full cursor-pointer bg-gray-300 py-3 text-xs font-bold tracking-wider text-black uppercase hover:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={!cart.length}
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
