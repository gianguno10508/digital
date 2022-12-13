import React from 'react';
import ScrollEffect from '../../common/ScrollEffect';



function BannerBottom() {
    return (
        <div className='container'>
            <div className='background-img'>
                <ScrollEffect children={<h2>Let‘s work together </h2>} />
                <div className='button-more'>
                    <a class="button" href="https://onextdigital.com/contact/">Get Started</a>
                </div>
            </div>
        </div>
    );
}

export default BannerBottom;