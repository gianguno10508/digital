import React from 'react';
import img from '../asset/img/banner-02.png';
import '../asset/styles/homepage_styles.css';

function Homepage(props) {
    return (
        <div className='section-home-main'>
            <div className='banner-main' >
                <img src={img} alt='img'></img>
            </div>
            <div className='section-about'>
            </div>
        </div>
    );
}

export default Homepage;