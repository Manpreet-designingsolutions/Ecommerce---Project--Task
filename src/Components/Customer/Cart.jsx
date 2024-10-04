import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProductStore from '../../App/productStore';
import SingleItem from './SingleItem';

const Cart = () => {

  const navigate = useNavigate();
  const { cart } = useProductStore();
  const handleCheckout = () => {
    navigate("/productlisting");
  }

  return (
    <>
      <div className='h-full w-full  mt-2 flex'>
        <div className='mt-5 flex xs:flex-col md:w-3/5 lg:px-2 xl:w-3/5 '>
        {
          cart.length > 0 && cart.map(
            (item, index) => {
              return <SingleItem key={index} item={item} />
            }
          )
          }
          </div>
        <div className='h-48 w-2/5 mt-5 flex flex-col items-center '>
          <p className='text-xl text-green-700 font-extrabold '>YOUR CART</p>
          <p className=' font-bold text-green-800 py-2 lg:text-3xl xl:text-5xl'>SUMMARY</p>
          <p className='text-xl  text-gray-800 py-3 font-bold'>Total Items : {cart.length} </p>
          <p className='text-xl font-bold text-gray-800'>Total Amount :{cart.reduce((acc, item)=> acc+parseFloat(item.price),0)}</p>
          <button className='bg-green-600 font-extrabold text-lg text-white rounded-lg p-1 w-48 mt-2 lg:w-40' onClick={handleCheckout}>Checkout now</button>
        </div>
      </div>
    </>

  )
}

export default Cart;
