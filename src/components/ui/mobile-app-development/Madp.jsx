import React from 'react';
import { bannerMadp } from '../../../asset/fakedata/mobileapp/bannerMobileapp';
import { itemMadp } from '../../../asset/fakedata/mobileapp/itemService';
import BackgroundItem from '../../common/BackgroundItem';
import MadpContent from './MadpContent';


function Madp() {
    return (
        <div className='container'>
            <BackgroundItem data={bannerMadp} />
            <div className='madp-content'>
                <div className='madp-list row'>
                    {
                        itemMadp.map((item, index) => (

                            <MadpContent data={item} key={index} />
                        ))
                    }

                </div>

            </div>
        </div>
    );
}

export default Madp;