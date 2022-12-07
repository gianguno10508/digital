import React from 'react';
import { bannerAboutus } from '../asset/fakedata/aboutus/banneraboutus';
import { itemOurVision } from '../asset/fakedata/aboutus/itemsAboutus';
import '../asset/styles/aboutus.css';
import BackgroundItem from '../components/common/BackgroundItem';
import LeftRightCol from '../components/common/LeftRightCol';
import BannerBottom from '../components/ui/about-us/BannerBottom';
import FactsFigures from '../components/ui/about-us/FactsFigures';
import OurTeam from '../components/ui/about-us/OurTeam';
import WhyChooseUs from '../components/ui/about-us/WhyChooseUs';
function AboutUs() {
    return (
        <div className='about-us-section'>
            <div className='about-us-banner-top'>
                <BackgroundItem data={bannerAboutus} />
            </div>
            <div className='facts_figures-section'>
                <div className='container'>
                    <FactsFigures />
                </div>
            </div>

            <div className='our_vision-section'>
                <div className='container'>
                    <div className='wapper'>6
                        <LeftRightCol data={itemOurVision} />
                    </div>
                </div>
            </div>

            <div className='our_technological_expertise-section'>
                <OurTeam />
            </div>

            <div className='why-choose-us-section'>
                <WhyChooseUs />
            </div>

            <div className='why-choose-us-banner-bottom'>
                <BannerBottom />
            </div>
        </div>
    );
}

export default AboutUs;