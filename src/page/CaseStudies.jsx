import React, { useState } from 'react';
import bannerCaseStudies from '../asset/fakedata/casestudies/banner';
import { itemCaseStudies, listCategory } from '../asset/fakedata/casestudies/itemCaseStudies';
import '../asset/styles/casestudies.css';
import Background1 from '../components/common/Background1';
import MainItems from '../components/ui/casestudies/MainItems';
import $ from 'jquery';

// const allCategories = ['All', ...new Set(listCategory.map((p) => p.category))]
const allCategories = [...new Set(listCategory.map((p) => p.category))]
function CaseStudies() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(itemCaseStudies);
    console.log(menuItems.length);
    const filterCategory = (category) => {

        const newItems = itemCaseStudies.filter((item) => item.category === category);
        setMenuItems(newItems);
    }

    $(document).ready(function () {
        var selector = '.case-studies-list-category ul li';

        $(selector).on('click', function () {
            $(selector).removeClass('active');
            $(this).addClass('active');
        });
    })

    return (
        <div className='case-studies-section'>
            <div className='case-studies-banner'>
                <Background1 data={bannerCaseStudies} />
            </div>

            <div className='case-studies-page'>
                <div className='case-studies-list-category'>
                    <ul>
                        <li className='case-studies-item-category active'
                            onClick={() => setMenuItems(itemCaseStudies)}
                        >
                            All
                        </li>
                        {
                            categories.map((item, index) => (
                                <li className='case-studies-item-category '
                                    key={index} onClick={() => filterCategory(item)}
                                >
                                    {
                                        item
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='container'>
                    <div className='case-studies-list-items'>
                        {
                            menuItems.length > 0 ? (
                                menuItems.map((item, index) => (
                                    <div className="case-studies-item" key={index}>
                                        <MainItems data={item} />
                                    </div>
                                ))
                            ) : (
                                <p className='no-post'>Sorry, no posts matched your criteria.</p>
                            )
                        }

                    </div>
                </div>

            </div>
        </div>
    );
}

export default CaseStudies;