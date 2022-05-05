import React, { useRef } from 'react';
import { Button, Spinner} from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);



// <=================password rest =========================> 
const [sendPasswordResetEmail, 
    sending, 
    error2] = useSendPasswordResetEmail(auth);

// <================================================================>
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleLoginSubmit = (e) =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const passowrd = passwordRef.current.value;
        signInWithEmailAndPassword(email,passowrd);
        
    }

 /* <====================================================================================================>
  <=================================handle rest passowrd===============================================>
  <====================================================================================================>
*/

const handlePasswordRest = () =>{
    const email = emailRef.current.value;
    sendPasswordResetEmail(email);
    toast('sent email');
    
}

/* <=========================handle error ==========================>
 <=================================================================>
*/
 let errorElement;
 if(error){
     errorElement=
    
         <p>Error:{error.message}</p>
   
 }
 if(error2){
     errorElement=
    
         <p>Error:{error2.message}</p>
   
 }

 /* <=========================handle loading ==========================>
 <=================================================================>
*/


let loadingElement;
if(loading){

    loadingElement =
    <Spinner animation="border" variant="danger" />
}


    return (
        <div className='login-section'>
            <div className="container">
                <div className="login-container">

                    <div className="login-components">
                        <form onSubmit={handleLoginSubmit}>
                            <h1 className="text-center mt-5 mb-5"> Login </h1>
                            <input ref={emailRef} className='email-field' type="email" name="email" id="1" placeholder='Enter Email @gmail.com' required/>
                            <input ref={passwordRef} className='password-field' type="password" name="password" id="2" placeholder='Enter Password' />
                            
                            <p className="errorHandle"> {errorElement} </p>
                            <p className="loadingHandle"> {loadingElement} </p>
                     
                            <input className='login-btn' type="submit" value="Login" />
                            <Button  onClick={handlePasswordRest} className='text-decoration-none forgot-password' variant="link"> Forget Password?  </Button>
                           
                            <hr className="new1" />
                        </form>
                    </div>

                    <Link className='text-decoration-none allready-account' to="/register">  Create a new account  </Link>
                    <hr className="new1" />

                    <SocialLogin></SocialLogin>
                    <ToastContainer/>

                </div>
            </div>
        </div>
    );
};

export default Login;