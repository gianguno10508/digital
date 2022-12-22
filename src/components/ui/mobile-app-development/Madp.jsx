// import React from 'react';
// import { bannerMadp } from '../../../asset/fakedata/mobileapp/bannerMobileapp';
// import { itemMadp } from '../../../asset/fakedata/mobileapp/itemService';
import Background1 from '../../common/Background1';
import BackgroundItem from '../../common/BackgroundItem';
import MadpContent from './MadpContent';


function Madp({ banner, items }) {
    return (
        <div className='container'>
            <Background1 data={banner} />
            <div className='madp-content'>
                <div className='madp-list row'>
                    {
                        items.map((item, index) => (
                            <MadpContent data={item} key={index} step={`${index + 1}`} />
                        ))
                    }

                </div>

            </div>
        </div>
    );
}

export default Madp;