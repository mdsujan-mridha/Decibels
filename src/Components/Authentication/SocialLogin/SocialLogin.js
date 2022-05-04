import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faGoogle,
    faGithub } from '@fortawesome/free-brands-svg-icons';
import './SocialLogin.css';    

const SocialLogin = () => {
    return (
        <div className='social-login'>
            <form>
            <button className='google-login'> <FontAwesomeIcon icon={faGoogle} size='2x'/> Login with Google </button>
            <button className='github-login'> <FontAwesomeIcon icon={faGithub} size='2x'/> Login with Github </button>
            </form>
        </div>
    );
};

export default SocialLogin;