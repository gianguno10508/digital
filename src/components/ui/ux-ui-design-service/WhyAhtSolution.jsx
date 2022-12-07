import { Markup } from 'interweave';
import React from 'react';
// import { itemSolution } from '../../../asset/fakedata/uxuidesign/itemuxui';
import LeftRightCol from '../../common/LeftRightCol';



function WhyAhtSolution({ whychoose }) {
    return (
        <div className='why-aht-solution-content'>
            <div className='top-content'>
                <Markup content={whychoose.title} />
            </div>

            <div className='solution-list'>
                {
                    whychoose.services && whychoose.services.map((item, index) => (
                        <div className='solution-item' key={index}>
                            <div className='number'>
                                {`${index + 1}`}
                            </div>
                            <LeftRightCol data={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default WhyAhtSolution;