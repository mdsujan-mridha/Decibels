import React, { useEffect, useState } from 'react';
import useProducts from '../CustomHooks/UseProducts';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const[products,setProduct] = useProducts();
   

    return (
        <div>
            <div className="products-container">
                <div className="container">
                    <h1 className='text-center products-title'> Our All Products {products.length}  </h1>
                    <div className="load-products">
                      {
                          products.map(product=><Product
                          key={product._id}
                          product={product}
                          ></Product>)
                      }
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;