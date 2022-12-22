import React from 'react';

function Introduce({ introduce }) {
    return (
        <div className='introduce-section'>
            <div className='container'>
                <div className='introduce-inner'>
                    <div className='cicle'>
                    </div>
                    <div className='content'>
                        <p>{introduce}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Introduce;