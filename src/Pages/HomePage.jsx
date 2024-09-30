import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import toast from 'react-hot-toast';

const HomePage = () => {
    const [formData, setFormData] = useState({
        email: '', password: ''
    })
    const navigate = useNavigate();

    const handleAdmin = () => {
        navigate("/login");
    }
    const handleSubmit = (event) => {
        event.preventDefault();


        const adminDetails = {
            'adminEmail': "admin@gmail.com",
            'adminPassword': "admin@12345"
        }

        const sellerDetails = {
            'sellerEmail': 'seller@gmail.com',
            'sellerPassword': 'seller@123'
        }
        const customerDetails = {
            'customerEmail': 'customer@gmail.com',
            'customerPassword': 'customer@123'
        }

        if (formData.email === adminDetails.adminEmail && formData.password === adminDetails.adminPassword) {
            toast.success("Login as Admin Successfully");
            localStorage.setItem("adminLoggedIn", true);
            navigate("/admin");
            console.log("navigate to admin panel");
        }
        else if (formData.email === sellerDetails.sellerEmail && formData.password === sellerDetails.sellerPassword)
        {
            toast.success("Login as Seller successfully");
            localStorage.setItem("sellerLoggedIn", true);
            navigate("/productspage");
            console.log("login as seller --->>>", formData);
        }
        else if (formData.email === customerDetails.customerEmail && formData.password === customerDetails.customerPassword)
        {
            toast.success('Login as customer successfully');
            localStorage.setItem("customerLoggedIn", true);
            navigate("/productlisting");
            console.log("customer form data --->>>", formData);
        }
        else {
            toast.error('Invalid email or password');
}

    }
const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value
    })
}
return (
    <div className='bg-gray-400 h-screen w-screen flex gap-x-96 '>
        <div className='h-screen bg-sky-950 w-52 py-10'>
            <ul className=' h-32 w-40 mx-auto'>
                <li className='font-bold  py-2 text-white bg-slate-600 hover:cursor-pointer '><AdminPanelSettingsIcon className='mx-4' onClick={handleAdmin} />Admin</li>
                <li className='font-bold  py-2 text-white bg-slate-600 my-3 hover: cursor-pointer'><StorefrontIcon className='mx-4' onClick={handleAdmin} />Seller</li>
                <li className='font-bold  py-2 text-white bg-slate-600 hover: cursor-pointer '><GroupAddIcon className='mx-4' onClick={handleAdmin} />Customer</li>
            </ul>
        </div>
        <div className='h-96 bg-slate-300 w-96 mt-14 rounded-lg'>
            <h1 className='text-center font-bold text-2xl mt-5'>Login</h1>
            <p className='text-xs font-bold text-center mt-1'>Hi, Welcome Back</p>
            <form className='flex  flex-col mt-7' onSubmit={handleSubmit}>
                <label htmlFor='email' className='text-slate-700 font-bold text-medium mx-10'>Email</label>
                <input type='email' placeholder='Enter your mail...' name='email' id='email' value={formData.email} onChange={handleChange} required className='mt-2 p-1 text-center  mx-10 rounded-md bg-slate-100' />
                <label htmlFor='password' className='text-slate-600 font-bold text-medium mt-3 mx-10'>Password</label>
                <input type='password' placeholder='Enter your password...' name='password' id='password' value={formData.password} onChange={handleChange} required className='mt-2 p-1 text-center mx-10 rounded-md bg-slate-100' />
                <button type='submit' className='mt-9 bg-sky-800 p-1 w-28 rounded-md mx-auto text-gray-100 font-bold'>Login</button>
            </form>
        </div>

    </div>
)
}

export default HomePage;
