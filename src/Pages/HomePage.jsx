import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Person3Icon from '@mui/icons-material/Person3';
import { toast, Toaster } from 'react-hot-toast';
import useUsersStore from '../App/UsersStore';

const HomePage = () => {
    const { registeredUsers } = useUsersStore();

    const [formData, setFormData] = useState({
        email: '', password: '',
    })
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.email === 'admin@gmail.com') {
            localStorage.setItem("UserType", 'admin');
            setIsLoggedIn(true);
            toast.success("Admin Logged in successfully!!");
            navigate("/add");
            return;
        }

        const user = registeredUsers.find(
            (user) => user.email === formData.email && user.password === formData.password
        )

        if (user) {
            localStorage.setItem("UserType", user.userType);
            localStorage.setItem("userdata", JSON.stringify(user));
            setIsLoggedIn(!isLoggedIn);
            toast.success('Login successfully');
        }
        else {
            toast.error("Invalid credentials");
        }

        if (user.userType === 'seller') {
            navigate("/productspage");
        } else if (user.userType === 'customer') {
            navigate("/productlisting");
        }
        else {
            toast.error("Invalid credentials");
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleLogout = () => {
        setIsLoggedIn(!isLoggedIn);
        toast.success("Logout successfully!!!");
    }

    return (
        <>
            <Toaster />
            {
                isLoggedIn ? (
                    <div className='bg-gray-400 h-screen min-w-full flex flex-col items-center '>
                        <div className='h-auto bg-sky-950 w-full py-10'>
                            <ul className='flex gap-3 '>
                                <li className='font-bold  py-2 text-white  hover:cursor-pointer '><AdminPanelSettingsIcon className='mx-4' />Admin</li>
                                <li className='font-bold  py-2 text-white   hover: cursor-pointer'><StorefrontIcon className='mx-4' />Seller</li>
                                <li className='font-bold  py-2 text-white  hover: cursor-pointer '><GroupAddIcon className='mx-4' />Customer</li>
                            </ul>
                        </div>
                        <div className=' bg-slate-300 mt-14 rounded-lg w-56 '>
                            <h1 className='text-center font-bold text-2xl mt-5'>Login</h1>
                            <p className='text-xs font-bold text-center mt-1'>Hi, Welcome Back</p>
                            <form className='flex flex-col mt-7' onSubmit={handleSubmit}>
                                <label htmlFor='email' className='text-slate-700 font-bold text-medium mx-10'>Email</label>
                                <input type='email' placeholder='Enter your mail...' name='email' id='email' value={formData.email} onChange={handleChange} required className='mt-2 p-1 text-center  mx-10  rounded-md bg-slate-100' />
                                <label htmlFor='password' className='text-slate-600 font-bold text-medium mt-3 mx-10'>Password</label>
                                <input type='password' placeholder='Enter your password...' name='password' id='password' value={formData.password} onChange={handleChange} required className='mt-2 p-1 text-center mx-10 rounded-md bg-slate-100' />
                                <button type='submit' className='mt-9 bg-sky-800 p-1 w-28 rounded-md mx-auto text-gray-100 font-bold m-3 '>Login</button>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className='bg-gray-400 h-screen w-screen flex gap-x-96 '>
                        <div className='h-screen bg-sky-950 w-52 py-10'>
                            <ul className=' h-32 w-40 mx-auto'>
                                <li className='font-bold  py-2 text-white bg-slate-600 hover: cursor-pointer '><Person3Icon className='mx-4' />{localStorage.getItem('UserType')}</li>
                            </ul>
                            <button type='submit' className='mt-9 bg-sky-800 p-1 w-28 rounded-md mx-10 text-gray-100 font-bold' onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                )
            }
        </>

    )
}

export default HomePage;
