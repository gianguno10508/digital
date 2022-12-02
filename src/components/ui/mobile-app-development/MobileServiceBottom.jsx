import React from 'react';
import { itemServiceLeft } from '../../../asset/fakedata/mobileapp/itemService';
import LeftRightCol from '../../common/LeftRightCol';



function MobileServiceBottom() {
    return (
        <div className='mobile-service-bottom' >
            <LeftRightCol data={itemServiceLeft} />
        </div>
    );
}

export default MobileServiceBottom;