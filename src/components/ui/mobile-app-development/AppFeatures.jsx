import React from 'react';
import { bannerAppFeatures } from '../../../asset/fakedata/mobileapp/bannerMobileapp';
import { itemAppFeatures } from '../../../asset/fakedata/mobileapp/itemService';
import Background1 from '../../common/Background1';
import BackgroundItem from '../../common/BackgroundItem';
import MainItemCol from '../../common/MainItemCol';
import MainItemCol1 from '../../common/MainItemCol1';



function AppFeatures() {
    return (
        <div className='container'>
            <Background1 data={bannerAppFeatures} />
            <div className='app_features-content'>
                <div className='app_features-list row'>
                    {
                        itemAppFeatures.map((item, index) => (
                            <div className='app_features-items ' key={index}>
                                <div className='wapper'>
                                    <MainItemCol1 data={item} />
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default AppFeatures;