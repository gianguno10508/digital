import React from 'react';
import { bannerAppFeatures } from '../../../asset/fakedata/mobileapp/bannerMobileapp';
import { itemAppFeatures } from '../../../asset/fakedata/mobileapp/itemService';
import BackgroundItem from '../../common/BackgroundItem';
import MainItemCol from '../../common/MainItemCol';



function AppFeatures() {
    return (
        <div className='container'>
            <BackgroundItem data={bannerAppFeatures} />
            <div className='app_features-content'>
                <div className='app_features-list row'>
                    {
                        itemAppFeatures.map((item, index) => (
                            <div className='app_features-items ' key={index}>
                                <div className='wapper'>
                                    <MainItemCol data={item} />
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