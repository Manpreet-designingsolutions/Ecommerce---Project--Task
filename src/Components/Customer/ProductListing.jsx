import React from 'react';
import useProductStore from '../../App/productStore';
import Product from './Product';

const ProductListing = () => {
    const { products } = useProductStore();
    return (
        <>
            <div className='grid xs:grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3   xl:grid-cols-5 '>
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
