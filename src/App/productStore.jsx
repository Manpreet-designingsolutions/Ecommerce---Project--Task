
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useProductStore = create(
    persist(
        (set) => (
            {
                products: [],
                cart: [],
                setProduct: (newProduct) => set((state) => ({
                    products: [newProduct, ...state.products]
                })),
                addToCart: (newProduct) => set(
                    (state) => (
                        {
                            cart: [newProduct, ...state.cart]
                        }
                    )
                ),
                removeFromCart: (id) => set(
                    (state) => (
                        {
                            cart: state.cart.filter((item) => item.id !== id)
                        }
                    )
                ),
                resetData: () => set(
                    {
                        products: []
                    }
                )

            }

        )
    ),
    {
        name:'shopping-products'
    },
);

export default useProductStore;
