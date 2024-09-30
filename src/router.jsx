import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ProductsPage from "./Components/Seller/ProductsPage"
import ProductForm from "./Components/Seller/ProductForm"
import SellerDashboard from './Components/Seller/SellerDashboard';
import HomePage from "./Pages/HomePage";

export const router = createBrowserRouter([
    {
        path: '/home',
        element: <HomePage />
    },
    {
        path: '/',
        element: <SellerDashboard />,
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
    // {
    //     path: '/productlisting',
    //     element: <CustomerDashboard />,
    //     children: [
    //         {
    //             path: 'productlisting',
    //             element: <ProductListing />
    //         },
    //         {
    //             path: 'cart'
                    // element: <Cart />
    //         },
    //     ]
    // }
]);