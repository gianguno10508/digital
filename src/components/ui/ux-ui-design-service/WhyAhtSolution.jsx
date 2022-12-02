import React from 'react';
import { itemSolution } from '../../../asset/fakedata/uxuidesign/itemuxui';
import LeftRightCol from '../../common/LeftRightCol';



function WhyAhtSolution() {
    return (
        <div className='why-aht-solution-content'>
            <div className='top-content'>
                <div className='title'>  Why ONextDigital  Solution</div>
                <h2>Why choose us</h2>
            </div>

            <div className='solution-list'>
                {
                    itemSolution.map((item, index) => (
                        <div className='solution-item' key={index}>
                            <div className='number'>
                                {item.id}
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