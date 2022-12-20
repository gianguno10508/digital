import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Category({ allListCategory, listCategory }) {
    // const [menuItems, setMenuItems] = useState();
    // console.log(menuItems);
    // const filterCategory = (category) => {

    //     const newItems = listCategory.filter((item) => item.category === category);
    //     setMenuItems(newItems);
    // }
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
                                ({item.list.length})
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Category;