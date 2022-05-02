import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram

} from '@fortawesome/free-brands-svg-icons'
import './Footer.css';


const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 left-corner">
                        <h3 className='text-center mt-5'> About </h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequatur voluptates dolor ipsa ipsam inventore, expedita voluptas obcaecati quo soluta. Possimus incidunt ex accusamus ipsam deserunt, dolore officiis quos dolorum. </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 middle-corner">
                        <h3 className='text-center mt-5'> Quick Link </h3>
                        <Link to='/Home'> Home </Link>
                        <Link to='/Product'> Product </Link>
                        <Link to='/About'> About us </Link>
                        <Link to='/Contact'> Contact </Link>
                        <Link to='/Login'> Login </Link>
                        <Link to='/Register'> Register </Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 right-corner">
                        <h3 className='text-center mt-5'> Follow us with </h3>
                        <div className="social-icons">
                            <Link to='/https://youtube.com'>  <FontAwesomeIcon icon={faYoutube} size="2x" /> </Link>
                            <Link to='/https://facebook.com'>  <FontAwesomeIcon icon={faFacebook} size="2x" /> </Link>
                            <Link to='/https://twitter.com'>  <FontAwesomeIcon icon={faTwitter} size="2x" /> </Link>
                            <Link to='/https://instagram.com'>  <FontAwesomeIcon icon={faInstagram} size="2x" /> </Link>
                        </div>
                    </div>
                </div>
                <div className="copy-right">
                    <h5 className='text-center'> Copyright @ 2022 developer suj@n </h5>
                </div>
            </div>

        </div>
    );
};

export default Footer;
