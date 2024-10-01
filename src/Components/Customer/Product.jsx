import React from 'react';
import useProductStore from '../../App/productStore';
import { toast, Toaster } from "react-hot-toast";

const Product = ({ item }) => {
    const { addToCart } = useProductStore();
    const handleButton = () => {
        console.log("Button is clicked");
        console.log("calling the action from the store", item);
        addToCart(item);
        toast.success(" Item added to cart!!");
    }
    return (
        <>
            <Toaster />
            <div className='bg-gray-200 flex flex-col  w-52 h-72  mt-5 p-3 rounded-lg '>
                <p className='font-bold text-lg'>{item.title.split("").slice(0, 14).join("") + "..."}</p>
                <p className='text-xs color-gray-500'>{item.description.split("").slice(0, 51).join('') + "..."}</p>
                <div className='h-32 bg-gray-400 w-32 mt-6 flex justify-center mx-auto'>
                    {/* <img src=" " className='h-full w-full' /> */}
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
