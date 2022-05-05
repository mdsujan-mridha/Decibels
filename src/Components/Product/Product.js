import React, { useState } from 'react';
import './Product.css'

const Product = ({product}) => {
    console.log(product);
    const{name,img,quantity,description,supplier}= product;
    const[readMore,setReadMore] = useState(true);
    const toggleReadMore = () => {setReadMore(!readMore)};

    return (
        <div>
           <div className="product-cart">
               <div className="card">
                   <img className='product-img' src={img} alt="product-1" />
                    <div className="card-container">
                    <h2 className='product-name'> Name: {name} </h2>
                   <p className='product-description'> 
                   {readMore ? description.slice(0, 80): description }
                     
                       {description.length > 90 &&
                     <span onClick={toggleReadMore}>
                      {readMore ? '...read more' : ' ...show less'};
                     </span>
                         }
                      </p>
                   <h3 className='product-quantity'> Quantity: {quantity} </h3>
                <h4 className='product-suplier'>  Supplier:{supplier} </h4>
                    </div>

               </div>
           </div>
        </div>
    );
};

export default Product;