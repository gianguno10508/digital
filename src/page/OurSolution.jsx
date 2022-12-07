import React from 'react';
import '../asset/styles/oursolution.css';
import AfterBanner from '../components/ui/our-solution/AfterBanner';
import BannerTop from '../components/ui/our-solution/BannerTop';
import Introduce from '../components/ui/our-solution/Introduce';
function OurSolution() {

    return (
        <div className='our-solution-section'>
            <BannerTop />
            <Introduce />

        </div>
    );
}

export default OurSolution;