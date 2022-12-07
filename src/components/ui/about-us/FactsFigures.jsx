import React from 'react';
import { itemOurVision, itemsFact } from '../../../asset/fakedata/aboutus/itemsAboutus';
import LeftRightCol from '../../common/LeftRightCol';
import MainItemCol from '../../common/MainItemCol';


function FactsFigures(props) {
    return (
        <div className='facts_figures-content'>
            <div className='facts_figures-title'>
                <h2>Facts & Figures </h2>
            </div>
            <div className='facts_figures-list'>
                <div className='wapper'>
                    {
                        itemsFact.map((item, index) => (
                            <div className='facts_figures-item' key={index}>
                                <MainItemCol data={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default FactsFigures;