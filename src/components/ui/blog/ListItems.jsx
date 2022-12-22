import React from 'react';
import { Link } from 'react-router-dom';

function ListItems({ item, index }) {

    return (
        <>
            <div className='blog-item' key={index}>
                <div className='blog-image'>
                    <div className='blog-wapper'>
                        {
                            item.image &&
                            <Link to={`/${item.title}`}><img src={item.image.sourceUrl} alt='img' /></Link>
                        }
                    </div>


                </div>
                <div className='blog-content'>
                    <h4 className='blog-title'>
                        <Link to={`/${item.title}`}>{item.title}</Link>
                    </h4>
                    <div className='blog-description'>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        </>


    );
}

export default ListItems;