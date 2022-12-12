import React from 'react';
import { itemExpertise } from '../../../asset/fakedata/aboutus/itemsAboutus';


function OurTeam({ ourTeam }) {
    return (
        <div className='container'>
            <div className='section-banner'>
                <h2>Our Team</h2>
            </div>
            <div className='expertise-list row'>
                {
                    ourTeam.map((item, index) => (
                        <div className='expertise-item' key={index}>
                            <div className='img-wapper'>
                                <img src={item.sourceUrl} alt=''></img>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default OurTeam;