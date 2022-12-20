import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getContentCaseStudies } from '../gql/case-studies';



function ListContentCategory() {
    const { category } = useParams();
    // console.log(category);
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
    // console.log(thisContent);

    let jsonContent = [];
    if (thisContent !== undefined && thisContent.list !== null) {
        jsonContent = thisContent.list
    }
    console.log(jsonContent);
    return (
        <div>

            {jsonContent &&
                jsonContent.map((item, index) => (
                    <h1 key={index}>{item.title}</h1>
                ))}
        </div>
    );
}

export default ListContentCategory;