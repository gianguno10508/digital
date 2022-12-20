import React from 'react';
import { Link } from 'react-router-dom';



function LastestNew({ lastestNews }) {
    return (
        <div className='widget_recent_entries'>
            <div className='widget-content'>
                <h2>Lastest News</h2>
                <ul>
                    {lastestNews &&
                        lastestNews.map((item, index) => (
                            <li key={index}>
                                <Link to={`/${item.title}`}>{item.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default LastestNew;