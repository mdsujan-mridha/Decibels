import React from 'react';

import './Login.css';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="login-container">

                    <div className="login-components">
                        <form>
                            <h1 className="text-center mt-5 mb-5"> Login </h1>
                            <input className='email-field' type="email" name="email" id="1" placeholder='Enter Email @gmail.com' />
                            <input className='password-field' type="password" name="password" id="2" placeholder='Enter Password' />
                            <p> Forgot your password? </p>
                            <input className='login-btn' type="submit" value="Login" />
                            <hr className="new1"/>
                        </form>
                    </div>

                    <p> Create a new account </p>
                    <hr className="new1"/> 
                    <SocialLogin></SocialLogin>

                </div>
            </div>
        </div>
    );
};

export default Login;