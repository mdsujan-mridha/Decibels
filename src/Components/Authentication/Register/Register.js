import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    return (
        <div>
             <div className="container">
                <div className="login-container">

                    <div className="login-components">
                        <form>
                            <h1 className="text-center mt-5 mb-5"> Register </h1>
                            <input className='email-field' type="email" name="email" id="1" placeholder='Enter Email @gmail.com' />
                            <input className='email-field' type="name" name="name" id="2" placeholder='Enter your name' />
                            <input className='password-field' type="password" name="password" id="3" placeholder='Enter Password' />
                       
                            <input className='login-btn' type="submit" value="Signup" />
                            <hr className="new1"/>
                        </form>
                    </div>

                 <p> Already have an account     <Link to = "/login"> <span> Login </span> </Link> </p>
                    <hr className="new1"/> 
                    <SocialLogin></SocialLogin>

                </div>
            </div>
        </div>
    );
};

export default Register;