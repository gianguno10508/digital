import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { getContentCaseStudies } from '../gql/case-studies';
import '../asset/styles/list_category.css';


function ListContentCategory() {
    const { category } = useParams();

    const [listCategory, setListcategory] = useState([]);

    useEffect(() => {
        try {
            getContentCaseStudies().then(function (res) {

                setListcategory(res.page.caseStudies.listCategory)
            })
        } catch (error) {
            console.log(error);
        }
    }, [])

    const thisContent = listCategory.find((product) => String(product.category) === category) || {};
    console.log(thisContent);

    let jsonContent = [];
    if (thisContent !== undefined && thisContent.list !== null) {
        jsonContent = thisContent.list
    }
    // console.log(jsonContent);

    return (
        <div className='list-category'>
            <div className='header-post'>
                <div className='header-post-main'>
                    <h1>
                        <span className='color-acent'>Category:</span>
                        <span>&nbsp;{category}</span>
                    </h1>
                </div>

            </div>

            <div className='container'>
                <div className=' post-listing'>
                    {jsonContent &&
                        jsonContent.map((item, index) => (
                            <div className='post-item' key={index}>
                                <div className='post-image '>
                                    <div className='post-image-main'>
                                        {
                                            item.image &&
                                            <Link to={`/${item.title}`}>
                                                <img src={item.image.sourceUrl} alt='img' />
                                            </Link>
                                        }
                                    </div>
                                </div>

                                <div className='post-content'>
                                    <h4 className='post-title'>
                                        <Link to={`/${item.title}`}>{item.title}</Link>
                                    </h4>
                                    <div className='post-description'>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>


        </div>
    );
}

export default ListContentCategory;