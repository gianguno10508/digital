import React from 'react';
import { itemWhyChoose } from '../../../asset/fakedata/aboutus/itemsAboutus';
import MainItemCol from '../../common/MainItemCol';
import MainItemCol1 from '../../common/MainItemCol1';


function WhyChooseUs({ items }) {
    return (
        <div className='container'>
            <div className='why-choose-title'>
                <h2>Reasons to Go with Us </h2>
            </div>
            <div className='why-choose-us-content'>
                <div className='list-content'>
                    {
                        items.map((item, index) => (
                            <div className='content-item' key={index}>
                                <MainItemCol1 data={item} number={`0${index + 1}`} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;