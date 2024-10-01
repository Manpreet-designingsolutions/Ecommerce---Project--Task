import React from 'react';
import { createBrowserRouter,Outlet } from 'react-router-dom';
import ProductsPage from "./Components/Seller/ProductsPage"
import ProductForm from "./Components/Seller/ProductForm"
import SellerDashboard from './Components/Seller/SellerDashboard';
import HomePage from "./Pages/HomePage";
import ProductListing from './Components/Customer/ProductListing';
import CustomerDashboard from './Components/Customer/CustomerDashboard';
import Cart from './Components/Customer/Cart';
import ProtectedRoute from './Components/ProtectedRoute';

const getUserType = () => {
   return localStorage.getItem("UserType");
}

const userType = getUserType(); 
console.log("getting the user type here inrouter--->>>>", userType)
export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/',
        element: (
            <ProtectedRoute roles={['admin', 'seller']} userType={userType}>
                <SellerDashboard />
                <Outlet />
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
                <Outlet />
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
    }
]);