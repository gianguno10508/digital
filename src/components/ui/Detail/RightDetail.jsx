import React from 'react';
import { contentRight, lastestNew } from '../../../asset/fakedata/detail/ContentRight';


function RightDetail() {
    return (
        <div className='sidebar col-md-3 col-sm-4'>
            <div className='widget_media_image'>
                <img src='https://onextdigital.com/wp-content/uploads/2022/07/Layer-2-1-300x296.png' alt=''></img>
            </div>
            <div className='widget_categories'>
                <div className='widget-content'>
                    <h2>Categories</h2>
                    <ul>
                        {
                            contentRight.map((item, index) => (
                                <li className='cat-item'>
                                    <a href={item.link}>{item.title}</a>
                                    ({item.number})
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div className='widget_recent_entries'>
                <div className='widget-content'>
                    <h2>Lastest News</h2>
                    <ul>
                        {
                            lastestNew.map((item, index) => (
                                <li>
                                    <a href={item.link}>{item.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default RightDetail;