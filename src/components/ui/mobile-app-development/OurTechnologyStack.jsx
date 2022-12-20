import React from 'react';
// import { bannerOurtechnology } from '../../../asset/fakedata/mobileapp/bannerMobileapp';
import Background1 from '../../common/Background1';
import BackgroundItem from '../../common/BackgroundItem';


function OurTechnologyStack({ data }) {
    return (
        <div className='our_technology_stack-container'>
            <div className='container'>
                <Background1 data={data} />
            </div>
        </div>

    );
}

export default OurTechnologyStack;