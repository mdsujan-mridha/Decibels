import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faGoogle,
    faGithub } from '@fortawesome/free-brands-svg-icons';
import {useSignInWithGoogle,useSignInWithGithub} from 'react-firebase-hooks/auth';
import './SocialLogin.css';    
import auth from '../../../firebase.init';
import { Spinner } from 'react-bootstrap';

const SocialLogin = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);

    /*<===========================================================================>
    <=======================error handle=========================>
    <===========================================================================>
    */
    let errorElement;
    if(error1){
        errorElement =
      <div>
        <p>Error: {error1.message}</p>
      </div>
    }
  else if(error2){
        errorElement =
      <div>
        <p>Error: {error2.message}</p>
      </div>
    }
  
/*<===========================================================================>
    <=======================error loading=========================>
    <===========================================================================>
    */
let loadingElement;
if(loading1 || loading2){
    loadingElement=
    <Spinner animation="border" variant="danger" />
}

    return (
        <div className='social-login'>
             <p className="errorHandle"> {errorElement} </p>
             <p className='loadingHandle'> {loadingElement} </p>
            <button onClick={() => signInWithGoogle()} className='google-login'> <FontAwesomeIcon icon={faGoogle} size='2x'/> Login with Google </button>
            <button onClick={()=> signInWithGithub()} className='github-login'> <FontAwesomeIcon icon={faGithub} size='2x'/> Login with Github </button>
          
        </div>
    );
};

export default SocialLogin;