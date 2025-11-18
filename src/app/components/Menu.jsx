import { RxDividerVertical } from "react-icons/rx";
import Link from "next/link";
import HoverText from "./HoverText";

const menu = () => {
  return (
    <div className="fixed top-0 left-1/2 z-50 w-full -translate-x-1/2 p-4 px-4">
      <ul className="flex items-center justify-center rounded-md bg-white/50 px-8 py-4 text-black shadow-lg backdrop-blur-sm">
        <li className="mx-5 flex-1 overflow-hidden font-semibold">
          <Link href="/">
            <HoverText text="webshoppen" />
          </Link>
        </li>
        <li>
          <ul className="mx-5 flex gap-7">
            <li className="cursor-pointer">
              <Link
                className="text-xl font-normal transition-all hover:font-bold"
                href="/productlist"
              >
                Products
              </Link>
            </li>
            <RxDividerVertical className="h-7 w-full" />
            <li className="cursor-pointer">
              <Link
                className="text-xl font-normal transition-all hover:font-bold"
                href="/cart"
              >
                Cart
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default menu;
