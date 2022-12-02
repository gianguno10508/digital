import React from 'react';
import { itemService } from '../../../asset/fakedata/mobileapp/itemService';
import MainItemCol from '../../common/MainItemCol';

function MobileServiceTop() {
    return (
        <div className='mobile-service-top row'>

            <div className='service-top-col-meta'>
                <div className='vcenter-item'>
                    <h2>Native Mobile App Development </h2>
                </div>
            </div>

            <div className='service-top-col-items'>
                {
                    itemService.map((item, index) => (
                        <div className='inner-service' key={index}>
                            <MainItemCol data={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default MobileServiceTop;