import React from 'react';
import bannerMobileapp from '../asset/fakedata/mobileapp/bannerMobileapp';
import BackgroundItem from '../components/common/BackgroundItem';
import '../asset/styles/mobile-app-development.css';

function MobileAppdevelopment() {
    return (
        <div className='section-mobile-app-development'>
            <div className='mobile-app-development-banner'>
                <BackgroundItem data={bannerMobileapp} />
            </div>

            <div className='mobile-service-section'>

            </div>
        </div>
    );
}

export default MobileAppdevelopment;