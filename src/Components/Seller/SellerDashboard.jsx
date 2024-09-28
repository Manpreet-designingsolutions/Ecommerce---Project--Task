import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';


const SellerDashboard = () => {
    return (
        <div className='bg-gray-400 h-screen w-screen flex gap-x-96 relative '>
            <div className='h-screen bg-sky-950 w-52 py-10 fixed'>
                <ul className=' h-32 w-40 mx-auto'>
                    <li className='font-bold  py-2 text-white bg-slate-600 hover:cursor-pointer '><HomeRoundedIcon className='mx-4' /><Link to='/producthome'>Home</Link></li>
                    <li className='font-bold  py-2 text-white bg-slate-600 my-3 hover: cursor-pointer'><AddCircleIcon className='mx-4' /><Link to='/newproduct'>Add Product</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default SellerDashboard;
