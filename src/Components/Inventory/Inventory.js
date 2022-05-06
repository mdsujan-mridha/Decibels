import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom'
const Inventory = () => {
    const{ productId } = useParams();
    // console.log(productId);
    const [product,setProduct] = useState({});
    const { name,img,price, description,quantity} = product;
    useEffect( ()=>{
        const url = `http://localhost:5000/products/${productId}`
        fetch(url)
         .then(res => res.json())
          .then(data => setProduct(data));
            //  console.log(product);
    } ,[])

    return (
        <div>
          <h3>   {name} </h3>
           
        </div>
    );
};

export default Inventory;