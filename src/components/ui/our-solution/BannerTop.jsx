import React from 'react';
import { bannerSoluition } from '../../../asset/fakedata/oursolution/banner';
import Background1 from '../../common/Background1';


function BannerTop() {
    return (
        <div className='banner-our-solution'>
            <Background1 data={bannerSoluition} />
            <div className='list-plaform'>
                <div className='platform_represent-border'>
                    <div className='plaform_1'>
                        <img src='https://onextdigital.com/wp-content/uploads/2022/08/Group-62.png' alt=''></img>
                    </div>
                    <div className='plaform_2'>
                        <img src='https://onextdigital.com/wp-content/uploads/2022/08/Group-63.png' alt=''></img>
                    </div>
                    <div className='plaform_3'>
                        <img src='https://onextdigital.com/wp-content/uploads/2022/08/Group-61.png' alt=''></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerTop;