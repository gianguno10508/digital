import React from 'react';
import { Link } from 'react-router-dom';

function Category({ listCategory }) {
    return (
        <div className='widget_categories'>
            <div className='widget-content'>
                <h2>Categories</h2>
                <ul>
                    {listCategory &&
                        listCategory.map((item, index) => (
                            <li
                                className='cat-item' key={index}
                            >
                                <Link to={`/category/${item.category}`}> {item.category}</Link>
                                &nbsp;&nbsp;({item.list.length})
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Category;