import React from 'react';
import { bannerMobileapp } from '../asset/fakedata/mobileapp/bannerMobileapp';
import BackgroundItem from '../components/common/BackgroundItem';
import '../asset/styles/mobile-app-development.css';
import MobileServiceTop from '../components/ui/mobile-app-development/MobileServiceTop';
import MobileServiceBottom from '../components/ui/mobile-app-development/MobileServiceBottom';
import OurTechnologyStack from '../components/ui/mobile-app-development/OurTechnologyStack';
import AppFeatures from '../components/ui/mobile-app-development/AppFeatures';
import Madp from '../components/ui/mobile-app-development/Madp';
import BottomPanel from '../components/ui/mobile-app-development/BottomPanel';

function MobileAppdevelopment() {
    return (
        <div className='section-mobile-app-development'>
            <div className='mobile-app-development-banner'>
                <BackgroundItem data={bannerMobileapp} />
            </div>

            <div className='mobile-service-section'>
                <div className='container'>
                    <div className='mobile-service-heder'>
                        <h2>Our services </h2>
                    </div>
                    <div className='mobile-service-content'>
                        <MobileServiceTop />
                        <MobileServiceBottom />
                    </div>
                </div>
            </div>

            <div className='our_technology_stack-section'>
                <OurTechnologyStack />
            </div>

            <div className='app_features-section'>
                <AppFeatures />
            </div>

            <div className='madp-section'>
                <Madp />
            </div>

            <div className='bottom_panel_banner-section'>
                <BottomPanel />
            </div>

        </div>
    );
}

export default MobileAppdevelopment;