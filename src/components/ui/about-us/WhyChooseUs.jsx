import React from 'react';
import PropTypes from 'prop-types';
import { itemWhyChoose } from '../../../asset/fakedata/aboutus/itemsAboutus';
import MainItemCol from '../../common/MainItemCol';


function WhyChooseUs() {
    return (
        <div className='container'>
            <div className='why-choose-title'>
                <h2>Reasons to Go with Us </h2>
            </div>
            <div className='why-choose-us-content'>
                <div className='list-content'>
                    {
                        itemWhyChoose.map((item, index) => (
                            <div className='content-item' key={index}>
                                <MainItemCol data={item} number={`0${index + 1}`} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;