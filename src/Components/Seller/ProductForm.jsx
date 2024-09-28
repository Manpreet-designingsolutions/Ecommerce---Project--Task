import React,{useState} from 'react';
// import * as Yup from "yup";
// import useProductStore from '../../App/productStore';
import toast from 'react-hot-toast';
const ProductForm = () => {
  // const { product, setProduct, resetProduct } = useProductStore();

  const [formData, setFormData] = useState({
    'title': '',
    'description': '',
    'category': '',
    'price': '',
    'quantity': '',
    // 'image': null
  });

  const handleSubmit=(event)=>
  {
    event.preventDefault();
    console.log("getting the product data here -->>>", formData);
    toast.success('Form Submitted Successfully!!');
    // resetProduct;
  }
  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? event.target.files[0] : value
    });
  }

  return (
    <div className='bg-gray-300 h-screen w-screen flex gap-x-96 '>
      <form className='flex  flex-col mt-7' onSubmit={handleSubmit} >
        <label htmlFor="title">Product Name</label>
        <input type='text' id='title' placeholder='Enter the title' onChange={handleChange} value={formData.title} name='title'  />
        <label htmlFor="description">Description</label>
        <textarea id='description' onChange={handleChange} value={formData.description} name='description'/>
        <label htmlFor="category">Select Category</label>
        <select id='category' onChange={handleChange} value={formData.category} name='category'>
          <option value="" disabled>Select</option>
          <option value="clothes">Clothes</option>
          <option value="electronics">Electronics</option>
          <option value="footwear">Footwear</option>
          <option value="Grocery">Grocery</option>
        </select>
        <label htmlFor="price">Price</label>
        <input type='number' id='price' onChange={handleChange} value={formData.price} name='price' />
        <label htmlFor="quantity">Quantity</label>
        <input type="number" id='quantity' onChange={handleChange} value={ formData.quantity} name='quantity' />
        {/* <label htmlFor="image">Upload image</label>
        <input type='file' id='image' onChange={handleChange} name='image' value={formData.image} /> */}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ProductForm;
