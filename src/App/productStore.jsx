
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useProductStore = create(
    persist(
        (set) => (
            {
                products: [],
                setProduct: (newProduct) => set((state) => ({
                    products: [newProduct, ...state.products]
                })),

            }

        )
    ),
    {
        name: 'shoppingProducts'
    }
);

export default useProductStore;
