import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import ProductsPage from "./Components/Seller/ProductsPage"
import ProductForm from "./Components/Seller/ProductForm"
import SellerDashboard from './Components/Seller/SellerDashboard';
import HomePage from "./Pages/HomePage";
import ProductListing from './Components/Customer/ProductListing';
import CustomerDashboard from './Components/Customer/CustomerDashboard';
import Cart from './Components/Customer/Cart';
import NotFoundPage from './Pages/NotFoundPage';
import ProtectedRoute from './Components/ProtectedRoute';
import AdminDashboard from './Components/Admin/AdminDashboard';
import AddForm from './Components/Admin/AddForm';
import UserListing from './Components/Admin/UserListing';

const getUserType = () => {
    return localStorage.getItem("UserType");
}

const userType = getUserType();
export const router = createBrowserRouter([
    {
        path: '*',
        element: <NotFoundPage />
    },

    {
        path: '/login',
        element: <HomePage />
    },
    {
        path: '/',
        element: (
            <ProtectedRoute roles={['admin', 'seller']} userType={userType}>
                <SellerDashboard />
                </ProtectedRoute>
        ),
        children: [
            {
                path: 'productspage',
                element: <ProductsPage />,
            },
            {
                path: 'newproduct',
                element: <ProductForm />,
            },
        ],
    },
    {
        path: '/',
        element: (
            <ProtectedRoute roles={['admin', 'customer']} userType={userType}>
                <CustomerDashboard />
            </ProtectedRoute>
        ),
        children: [
            {
                path: 'productlisting',
                element: <ProductListing />
            },
            {
                path: 'cart',
                element: <Cart />
            },
        ]
    },
    {
        path: '/',
        element: (
            <ProtectedRoute roles={['admin']} userType={userType}>
                <AdminDashboard />
            </ProtectedRoute>
        ),
        children: [
            {
                path: '/add',
                element: <AddForm  />
            },
            {
                path: '/userlisting',
                element: <UserListing />
            },
            
        ]
    }
]);