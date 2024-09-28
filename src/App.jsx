import HomePage from "./Pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SellerDashboard from "./Components/Seller/SellerDashboard";
import ProductsPage from "./Components/Seller/ProductsPage";
import ProductForm from "./Components/Seller/ProductForm";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/seller',
    element: <SellerDashboard />
  },
  {
    path: '/producthome',
    element: <ProductsPage />
  },
  {
    path: '/newproduct',
    element: <ProductForm />
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
      <Toaster  />
    </>
  )
}

export default App;
