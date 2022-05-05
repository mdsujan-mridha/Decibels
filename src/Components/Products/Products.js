import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const[products,setProducts]=useState([]);
     useEffect( ()=>{

           fetch('http://localhost:5000/product')
           .then(res => res.json())
           .then(data =>setProducts(data))   

     } ,[]);
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