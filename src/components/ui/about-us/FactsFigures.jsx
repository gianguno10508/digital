import React from 'react';
// import { itemOurVision, itemsFact } from '../../../asset/fakedata/aboutus/itemsAboutus';
import MainItemCol from '../../common/MainItemCol';
import MainItemCol1 from '../../common/MainItemCol1';


function FactsFigures({ figures }) {
    return (
        <div className='facts_figures-content'>
            <div className='facts_figures-title'>
                <h2>Facts & Figures </h2>
            </div>
            <div className='facts_figures-list'>
                <div className='wapper'>
                    {
                        figures.map((item, index) => (
                            <div className='facts_figures-item' key={index}>
                                <MainItemCol1 data={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default FactsFigures;