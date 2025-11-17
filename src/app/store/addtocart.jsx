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
            return { cart };
          }
          return { cart: [...state.cart, { ...product, qty: 1 }] };
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((i) => i.id !== productId),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    { name: "cart-storage" },
  ),
);

export default useStore;
