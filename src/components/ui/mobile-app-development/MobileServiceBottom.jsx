import React from 'react';
// import { itemServiceLeft } from '../../../asset/fakedata/mobileapp/itemService';
import LeftRightCol from '../../common/LeftRightCol';



function MobileServiceBottom({ data }) {
    return (
        <div className='mobile-service-bottom' >
            {
                data.image && <LeftRightCol data={data} />
            }

        </div>
    );
}

export default MobileServiceBottom;