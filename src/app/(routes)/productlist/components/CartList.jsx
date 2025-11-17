const CartList = () => {
  return (
    <div className="w-lg p-4 pt-24">
      <div className="bg-gray-200 p-4">
        <h2 className="mb-4 text-sm font-bold tracking-wider text-black uppercase">
          Shopping Cart
        </h2>

        <div className="flex flex-col gap-4">
          <div className="border-t border-gray-400 pt-4">
            <div className="flex justify-between">
              <span className="text-sm font-bold tracking-wider text-black uppercase">
                Total
              </span>
              <span className="text-sm font-bold text-black">$ 0</span>
            </div>
          </div>

          <button className="w-full bg-gray-300 py-3 text-xs font-bold tracking-wider text-black uppercase hover:bg-gray-400">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
