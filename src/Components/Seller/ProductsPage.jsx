import React from 'react';
import useProductStore from "../../App/productStore";

const ProductsPage = () => {
  const { products, resetData } = useProductStore();
  // const handleData = () => {
  //   resetData();
  // }
  return (
    <div className=' overflow-y-scroll h-screen'>
      {/* <button onClick={handleData}>reset</button> */}
      <table className='bg-gray-200 mt-5 min-w-full '>
        <thead>
          <tr className='bg-sky-800'>
            <th className='font-bold text-white'>Sr No.</th>
            <th className='font-bold text-white'> Image</th>
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
                    <td className='text-center font-semibold p-2'>{index + 1}</td>
                    <td className='text-center font-semibold p-2 bg-gray-200'>
                      <img src={product.file} alt="img.." className='bg-gray-200 text-center' />
                    </td>
                    <td className='text-left font-semibold p-2'>{product.title}</td>
                    <td className='text-left font-semibold p-2'>{product.description}</td>
                    <td className='text-center font-semibold p-2'>{product.category}</td>
                    <td className='text-center font-semibold p-2'>{product.price}</td>
                    <td className='text-center font-semibold p-2'>{product.quantity}</td>
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
