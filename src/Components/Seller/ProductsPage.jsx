import React from 'react';
import useProductStore from "../../App/productStore";

const ProductsPage = () => {
  const { products } = useProductStore();

  return (
    <div className=' flex flex-col  items-center h-screen '>
      <table className='bg-gray-200  w-full mt-5 '>
        <thead>
          <tr className='bg-sky-800'>
            <th className='font-bold text-white'>Sr No.</th>
            <th className='font-bold text-white'>Product Name</th>
            <th className='font-bold text-white'>Description</th>
            <th className='font-bold text-white'>Category</th>
            <th className='font-bold text-white'>Price</th>
            <th className='font-bold text-white'>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {
            products.length > 0 && products.map(
              (product, index) => {
                return (
                  <tr key={index}>
                    <td className='text-center font-semibold'>{index + 1}</td>
                    <td className='text-center font-semibold'>{product.title}</td>
                    <td className='text-center font-semibold'>{product.description}</td>
                    <td className='text-center font-semibold'>{product.category}</td>
                    <td className='text-center font-semibold'>{product.price}</td>
                    <td className='text-center font-semibold'>{product.quantity}</td>
                  </tr>
                )
              }
            )
          }
        </tbody>
      </table>
    </div>

   
  )
}

export default ProductsPage;
