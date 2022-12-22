import React from 'react';
import { itemDesign } from '../../../asset/fakedata/uxuidesign/itemuxui';
import LeftRightCol from '../../common/LeftRightCol';
import MainItemCol from '../../common/MainItemCol';
import MainItemCol1 from '../../common/MainItemCol1';


function TopContent({ data }) {
    return (
        <div className='top-content'>
            <div className='top-content-title'>
                <h2>Meet ONextDigital Design team</h2>
                <p className='content'>
                    With the group of enthusiastic young
                    designers, we are confident to provide
                    you with tech-digital media solutions
                    that reflect your business's power.  Our motto
                    is to follow established design
                    standards, workflows, and guidelines, ensuring your
                    products are completed on time.
                </p>
            </div>
            <div className='top-content-list-design '>
                <div className='list-design'>
                    {
                        data.map((item, index) => (
                            <div className='design-item' key={index}>
                                <MainItemCol1 data={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default TopContent;