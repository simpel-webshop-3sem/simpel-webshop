import { RxDividerVertical } from "react-icons/rx";
import Link from "next/link";
import HoverText from "./HoverText";

const menu = () => {
  return (
    <div className="fixed top-4 left-1/2 z-50 w-full max-w-[95vw] -translate-x-1/2 px-4">
      <ul className="flex rounded-md bg-white/50 px-8 py-4 text-black shadow-lg backdrop-blur-sm">
        <li className="mx-5 flex-1 overflow-hidden font-semibold">
          <HoverText text="webshoppen" />
        </li>
        <li>
          <ul className="mx-5 flex items-center gap-7">
            <li className="cursor-pointer transition-all hover:font-semibold">
              <Link href="/productlist">Products</Link>
            </li>
            <RxDividerVertical className="h-7 w-full" />
            <li className="cursor-pointer transition-all hover:font-semibold">
              <Link href="/">Cart</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default menu;
