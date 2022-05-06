import React from 'react';
import useProducts from '../CustomHooks/UseProducts';

const ManageInventory = () => {
    const[product,setProduct] = useProducts();
    console.log(product);
    return (
        <div>
          <h1>   Manage All Inventory </h1>
        </div>
    );
};

export default ManageInventory;