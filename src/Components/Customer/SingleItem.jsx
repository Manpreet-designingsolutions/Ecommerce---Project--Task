import React from 'react';
import { DeleteFilled } from "@ant-design/icons";
import { toast, Toaster } from "react-hot-toast";
import useProductStore from '../../App/productStore';

const SingleItem = ({ item }) => {
    const { removeFromCart } = useProductStore();
    const handleRemove = () => {
        console.log("button clicked");
        removeFromCart(item.id);
        toast.success("Item removed successfully!!!");
    }

    return (
        <>
            <Toaster />
            <div className='bg-gray-200 h-48 w-full flex gap-4 rounded-lg  p-4'>
                <div className='h-36 bg-gray-400 w-36'></div>
                <div className='h-48  w-2/3'>
                    <p className='text-lg font-semibold'>{item.title}</p>
                    <p className='text-md  text-gray-900 font-semibold'>{item.description.split("").slice(0, 65).join("") + ("...")}</p>
                    <div className='flex  justify-between mt-8'>
                        <p className='text-green-600 font-bold text-lg'>${item.price}</p>
                        <p className='h-8 w-8 bg-red-100  rounded-2xl text-center  text-lg'><DeleteFilled onClick={handleRemove} /></p>
                    </div>
                </div>
            </div>
        </>
       

    );
}

export default SingleItem;
