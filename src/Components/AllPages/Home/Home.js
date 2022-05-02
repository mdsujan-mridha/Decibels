import React from 'react';
import './Home.css'
import bannerbg from '../../../images/banner-bg.png';
import bannerItem from '../../../images/banner-item.png';
import prfectSectionImg from '../../../images/perfect.png'

const Home = () => {
    return (
        <div>
            <div className="banner-section">
                <div className="text-container-part">

                    <h1>
                        QuietComfort 35 wireless headphones II
                    </h1>
                    <div className="banner-cart">
                        <p> $229.95 </p>
                        <button className='banner-btn'> BUY NOW </button>
                    </div>
                </div>
                <div className="img-part">
                    <img src={bannerItem} alt="" />

                </div>
            </div>
            <div className="perfect-sound-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 perfect-img-part">
                            <img className='perfectSectionImg' src={prfectSectionImg} alt="" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 perfect-txt-part">
                            <h1>
                                Perfect sound
                                immersive world
                            </h1>
                            <p>
                                QuietComfort 35 wireless headphones II are engineered with renowned noise cancellation. With the Google Assistant and Amazon Alexa built-in, you have instant access to millions of songs, playlists and more—hands free.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;