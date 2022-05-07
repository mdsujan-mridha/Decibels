import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [ user ] = useAuthState(auth);
    // console.log(user);
    const [myItem,setMyItem] = useState([]);
      console.log(myItem);
    useEffect( () =>{
       

         const getMyItems = async()=>{
             let email = user?.email;
              console.log(email);
            const url = `https://rocky-brook-78230.herokuapp.com/myitems?email=${email}`;
           const {data} = await axios.get(url,{
              
             headers: {
                 authorization:`Bearer ${localStorage.getItem('accessToken')}`
             }

           });
           setMyItem(data);
         }

         getMyItems();
        
    } ,[user]);

    return (
        <div>
            <h1 className="text-center mt-5 my-items-title mb-5">  My Items  </h1>
            <div> 
          <h1>    my item:  {myItem.length} </h1>
           <h1>Name: {myItem.name} 
            <button> X </button>
            </h1>

            </div>
        </div>
    );
};

export default MyItems;