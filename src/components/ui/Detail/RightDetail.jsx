import React from 'react';
import Category from './Category';
import LastestNew from './LastestNew';
// import { contentRight, lastestNew } from '../../../asset/fakedata/detail/ContentRight';


function RightDetail({ listCategory, lastestNews }) {
    // console.log(listCategory);
    // const allListCategory = [...new Set(listCategory.map((p) => p.category))]
    // console.log(allListCategory);

    // let count = [];
    // listCategory.forEach(function (element) {
    //     count[element.category] = (count[element.category] || 0) + 1;
    // });

    // console.log(count);
    return (
        <div className='sidebar col-md-3 col-sm-4'>
            <div className='widget_media_image'>
                <img src='https://onextdigital.com/wp-content/uploads/2022/07/Layer-2-1-300x296.png' alt=''></img>
            </div>

            <Category listCategory={listCategory} />
            <LastestNew lastestNews={lastestNews} />
        </div>
    );
}

export default RightDetail;