import React, { useState, useRef } from 'react';
import * as Yup from "yup";
import toast from 'react-hot-toast';
import useProductStore from "../../App/productStore";
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const navigate = useNavigate();
  const { setProduct } = useProductStore();
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    'id': Date.now(),
    'title': '',
    'description': '',
    'category': '',
    'price': '',
    'quantity': '',
  });

  const validationSchema = Yup.object().shape(
    {
      title: Yup.string("Title should be a string").required("Title is required"),
      description: Yup.string("Description should be string").required("Description is required"),
      category: Yup.string().required("Category is required"),
      price: Yup.number("Price should be number").required('Price is required').positive("Price should be positive"),
      quantity: Yup.number('Quantity should be number').required("Quantity is required").positive("Quantity should be positive"),
      //   file: Yup.mixed().test("file size", "fil should be less than 2 mb",
      //     value => {
      //       if (value) {
      //         return value.size <= 2097152
      //       }
      //     }
      //   ).required('File is required')
    }
  );

  // const fileRef = useRef(null);
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      toast.success('Form Submitted Successfully!!');
      console.log("form data here ---->>>", formData);
      navigate("/productspage");
      console.log("form data here after id ---->>>", formData);

      setProduct(formData);
      setFormData({
        'id': null,
        'title': '',
        'description': '',
        'category': '',
        'price': '',
        'quantity': '',
      });
      // fileRef.current.value = '';
      setErrors({});
    } catch (error) {
      const newErrors = {};
      error.inner.forEach(
        (err) => newErrors[err.path] = err.message
      );
      setErrors(newErrors);
    }
  }

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? event.target.files[0] : value
    });
  }

  return (
    <>
      <div className=' h-full  w-full flex flex-col items-center   mt-6  '>
        <form className='flex flex-col gap-y-2  w-80 items-center rounded-lg py-5 bg-gray-200 m-7 ' onSubmit={handleSubmit}  >
          <h1 className='font-bold text-lg text-sky-950' >Add Product Details</h1>
          <div className='flex flex-col items-start py-2 '>
            <label htmlFor="title" className='font-bold text-gray-700'>Product Name</label>
            <input type='text' id='title' placeholder='Enter the title...' onChange={handleChange} value={formData.title} name='title' className='rounded-lg w-52 p-1' />
          </div>
          {
            errors.title && <span className='font-bold text-sm text-red-500'>{errors.title}</span>

          }
          <div className='flex flex-col items-start py-2' >
            <label htmlFor="description" className='font-bold text-gray-700 '>Description</label>
            <textarea id='description' onChange={handleChange} value={formData.description} name='description' className='rounded-lg w-52 p-1' placeholder='Enter the description...' />
          </div>
          {
            errors.description && <span className='font-bold text-sm text-red-500'>{errors.description}</span>
          }
          <div className='flex flex-col items-start py-2 '>
            <label htmlFor="category" className='font-bold text-gray-700 '>Select Category</label>
            <select id='category' onChange={handleChange} value={formData.category} name='category' className='rounded-lg w-52 p-1'>
              <option value="" disabled>Select</option>
              <option value="clothes">Clothes</option>
              <option value="electronics">Electronics</option>
              <option value="footwear">Footwear</option>
              <option value="Grocery">Grocery</option>
              <option value="bags">Bags</option>
              <option value="jewellery">Jewellery</option>


            </select>
          </div>
          {
            errors.category && <span className='font-bold text-sm text-red-500'>{errors.category}</span>

          }
          <div className='flex flex-col items-start py-2 '>
            <label htmlFor="price" className='font-bold text-gray-700 '>Price</label>
            <input type='number' id='price' onChange={handleChange} value={formData.price} name='price' className='rounded-lg w-52 p-1' />
          </div>
          
          {
            errors.price && <span className='font-bold text-sm text-red-500'>{errors.price}</span>

          }
          <div className='flex flex-col items-start py-2'>
            <label htmlFor="quantity" className='font-bold text-gray-700 '>Quantity</label>
            <input type="number" id='quantity' onChange={handleChange} value={formData.quantity} name='quantity' className='rounded-lg w-52 p-1' />
          </div>
          
          {
            errors.quantity && <span className='font-bold text-sm text-red-500'>{errors.quantity}</span>

          }
          {/* <label htmlFor="file" className='font-semibold text-gray-700 '>Upload image</label>
        <input type='file' id='file' onChange={handleChange} name='file' ref={fileRef}/>
        {
          errors.file && <span className='font-bold text-sm text-red-500'>{errors.file}</span>

        } */}
          <button type='submit' className='bg-sky-950 w-44 p-1 rounded-md text-white font-bold mt-4'>Submit</button>
        </form>
      </div>

    </>

  )
}

export default ProductForm;
