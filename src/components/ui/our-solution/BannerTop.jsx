import React from 'react';
// import { bannerSoluition } from '../../../asset/fakedata/oursolution/banner';
import Background1 from '../../common/Background1';


function BannerTop({ bannerTop, plafrom }) {
    return (
        <div className='banner-our-solution'>
            <Background1 data={bannerTop} />
            {
                plafrom.plaform1 && plafrom.plaform2 && plafrom.plaform3 &&
                <div className='list-plaform'>
                    <div className='platform_represent-border'>
                        <div className='plaform_1'>
                            <img src={plafrom.plaform1.sourceUrl} alt=''></img>
                        </div>
                        <div className='plaform_2'>
                            <img src={plafrom.plaform2.sourceUrl} alt=''></img>
                        </div>
                        <div className='plaform_3'>
                            <img src={plafrom.plaform3.sourceUrl} alt=''></img>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
}

export default BannerTop;