
import { create } from "zustand";

const useProductStore = create(
    (set) => (
        {
            product: {
                'title': '',
                'description': '',
                'category': '',
                'price': '',
                'quantity': '',
                'file': ''
            },
            setProduct: (newProduct) => set((state) => ({
              product:{...state.product, ...newProduct}  
            })),
            resetProduct: () => set({
                'title': '',
                'description': '',
                'category': '',
                'price': '',
                'quantity': '',
                'file': ''
            })
        }
        
    )
)

export default useProductStore;
