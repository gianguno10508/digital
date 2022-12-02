import React from 'react';
import { bannerOurtechnology } from '../../../asset/fakedata/mobileapp/bannerMobileapp';
import BackgroundItem from '../../common/BackgroundItem';


function OurTechnologyStack() {
    return (
        <div className='our_technology_stack-container'>
            <div className='container'>
                <BackgroundItem data={bannerOurtechnology} />
            </div>
        </div>

    );
}

export default OurTechnologyStack;