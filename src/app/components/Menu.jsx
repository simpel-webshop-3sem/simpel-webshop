import { RxDividerVertical } from "react-icons/rx";

const menu = () => {
  return (
    <ul className="flex">
      <li className="mx-5 flex-1">Webshoppen</li>
      <li>
        <ul className="mx-5 flex gap-7">
          <li>Products</li>
          <RxDividerVertical className="h-7 w-full" />
          <li>Cart</li>
        </ul>
      </li>
    </ul>
  );
};

export default menu;
