import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const idx = state.cart.findIndex((i) => i.id === product.id);
          if (idx !== -1) {
            const cart = state.cart.slice();
            const item = cart[idx];
            cart[idx] = { ...item, qty: (item.qty ?? 1) + 1 };
            console.log(cart);
            return { cart };
          }
          return { cart: [...state.cart, { ...product, qty: 1 }] };
        }),
      removeFromCart: (productId) =>
        set((state) => {
          const idx = state.cart.findIndex((i) => i.id === productId);
          if (idx.qty !== -1) {
            const item = state.cart[idx];
            if (item.qty > 1) {
              const cart = state.cart.slice();
              cart[idx] = { ...item, qty: item.qty - 1 };
              return { cart };
            } else {
              return { cart: state.cart.filter((i) => i.id !== productId) };
            }
          }
          return { cart: state.cart };
        }),
      clearCart: () => set({ cart: [] }),
    }),
    { name: "cart-storage" },
  ),
);

export default useStore;
