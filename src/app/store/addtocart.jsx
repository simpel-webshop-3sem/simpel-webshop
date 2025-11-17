import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      cart: [],
      toggleInCart: (product) => {
        const current = get().cart;
        const exists = current.includes(product);
        set({
          cart: exists
            ? current.filter((item) => item !== product) // Remove if exists
            : [...current, product], // Add if doesn't exist
        });
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);

export default useStore;
