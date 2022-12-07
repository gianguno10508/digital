import React from 'react';
import contentLeft from '../asset/fakedata/detail/ContentLeft';
import '../asset/styles/detail.css';
import LeftDetail from '../components/ui/Detail/LeftDetail';
import RightDetail from '../components/ui/Detail/RightDetail';

function Detail() {
    return (
        <div className='detail-section'>
            <div className='container'>
                <div className='row'>
                    <LeftDetail data={contentLeft} />
                    <RightDetail />
                </div>
            </div>
        </div>
    );
}

export default Detail;