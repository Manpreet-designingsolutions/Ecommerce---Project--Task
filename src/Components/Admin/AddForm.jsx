import React, { useState } from 'react';
import { toast, Toaster } from "react-hot-toast";
import useUsersStore from '../../App/UsersStore';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';

const AddForm = () => {
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});
    const { setUser } = useUsersStore();
    const [formData, setFormData] = useState({
        'username': '',
        'email': '',
        'password': '',
        'userType': ''
    });

    const validationSchema = Yup.object().shape(
        {
            username: Yup.string('String is required').required("username is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string().required("password is required"),
            userType: Yup.string().required("UserType is required"),
        }
    );

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await validationSchema.validate(formData, { abortEarly: false });
            setUser(formData);
            toast.success("User created successfully");
            setFormData({
                'username': '',
                'email': '',
                'password': '',
                'userType': ''
            })
            navigate("/userlisting");


            setErrors({});
        } catch (error) {
            const newErrors = {};
            error.inner.forEach(
                (err) => newErrors[err.path] = err.message
            );
            setErrors(newErrors);
        }
    }

    return (
        <>
            <Toaster />
            <form className='flex flex-col gap-y-4  w-80 items-center rounded-lg py-5 bg-gray-200 m-10 sm:h-3/6 md:h-3/6  lg:h-3/6 xl:h-4/6  ' onSubmit={handleSubmit}>
                <h1 className='font-bold text-lg text-sky-950 ' >Add User</h1>
                <div className='flex flex-col items-start  '>
                    <label htmlFor="username" className='font-bold text-gray-700'>UserName</label>
                    <input type='text' id='username' placeholder='Enter the username...' onChange={handleChange} value={formData.username} name='username' className='rounded-lg w-52 p-1' autoComplete="false" />
                </div>
                {
                    errors.username && <span className='font-bold text-sm text-red-500'>{errors.username}</span>
                }
                <div className='flex flex-col items-start py-2 '>
                    <label htmlFor="email" className='font-bold text-gray-700'>Email</label>
                    <input type='email' id='email' placeholder='Enter the email...' onChange={handleChange} value={formData.email} name='email' className='rounded-lg w-52 p-1' />
                </div>
                {
                    errors.email && <span className='font-bold text-sm text-red-500'>{errors.email}</span>
                }
                <div className='flex flex-col items-start py-2 '>
                    <label htmlFor="password" className='font-bold text-gray-700'>Password</label>
                    <input type='password' id='password' placeholder='Enter the password...' onChange={handleChange} value={formData.password} name='password' className='rounded-lg w-52 p-1' />
                </div>
                {
                    errors.password && <span className='font-bold text-sm text-red-500'>{errors.password}</span>
                }
                <div className='flex flex-col items-start py-2 '>
                    <label htmlFor="userType" className='font-bold text-gray-700 '>Select User</label>
                    <select id='userType' onChange={handleChange} value={formData.userType} name='userType' className='rounded-lg w-52 p-1'>
                        <option value="" disabled>Select</option>
                        <option value="seller">Seller</option>
                        <option value="customer">Customer</option>
                    </select>
                </div>
                {
                    errors.userType && <span className='font-bold text-sm text-red-500'>{errors.userType}</span>
                }
                <button type='submit' className='bg-sky-950 w-44 p-1 rounded-md text-white font-bold mt-4'>Submit</button>
            </form>
        </>

    )
}

export default AddForm;
