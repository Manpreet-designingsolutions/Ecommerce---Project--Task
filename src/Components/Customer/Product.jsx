import React from 'react';
import useProductStore from '../../App/productStore';
import { toast, Toaster } from "react-hot-toast";

const Product = ({ item }) => {
    const { addToCart } = useProductStore();
    const handleButton = () => {
        addToCart(item);
        toast.success(" Item added to cart!!");
    }
    return (
        <>
            <Toaster />
            <div className='  xs:grid-cols-1 rounded-lg px-3 py-6 w-5/6 mx-auto sm:grid-cols-3 md:grid-cols-3  lg:grid-cols-3 w-56   bg-gray-200 mt-5 mx-2 px-2 py-0 w-52 pb-3  xl:grid-cols-5 '>
                <p className='font-bold text-lg'>{item.title.split("").slice(0, 14).join("") + "..."}</p>
                <p className='text-xs color-gray-500'>{item.description.split("").slice(0, 51).join('') + "..."}</p>
                <div className='h-32 bg-gray-400 w-32 mt-2 flex justify-center mx-auto'>
                    <img src={item.file} className='h-full w-full' />
                </div>
                <div className='flex  justify-around mt-5'>
                    <div className='text-green-600 font-bold'>${item.price}</div>
                    <div>
                        <button className='bg-gray-300 p-1 rounded-2xl font-bold text-gray-600 w-28 hover:bg-gray-600 hover:text-white' onClick={handleButton}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Product;
