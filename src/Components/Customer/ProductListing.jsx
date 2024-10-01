import React from 'react';
import useProductStore from '../../App/productStore';
import Product from './Product';

const ProductListing = () => {
    const { products } = useProductStore();
    return (
        <>
            <div className='flex justify-around   mt-2 h-full w-full'>
                {
                    products.length > 0 && products.map(
                        (item,index) => {
                            return <Product key={index} item={item} />
                        }
                    )
                }
            </div>
        </>
    )
}

export default ProductListing;
