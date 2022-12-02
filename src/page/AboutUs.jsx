import React from 'react';
import { bannerAboutus } from '../asset/fakedata/aboutus/banneraboutus';
import '../asset/styles/aboutus.css';
import BackgroundItem from '../components/common/BackgroundItem';
function AboutUs() {
    return (
        <div className='about-us-section'>
            <div className='about-us-banner-top'>
                <BackgroundItem data={bannerAboutus} />
            </div>
            <div className='facts_figures-section'>
                <div className='container'>

                </div>
            </div>
        </div>
    );
}

export default AboutUs;