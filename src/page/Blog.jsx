import React, { useEffect, useState } from 'react';
import Background1 from '../components/common/Background1';
import ListItems from '../components/ui/blog/ListItems';
import { getContentBlog } from '../gql/blog';
import '../asset/styles/blog.css';

function Blog() {
    const [bannerTop, setBannerTop] = useState([]);
    const [listItems, setlistItems] = useState([]);
    useEffect(() => {
        try {
            getContentBlog().then(function (res) {
                // console.log(res);
                setlistItems(res.page.blog.listBlog)
                const banner = {
                    content: res.page.content,
                    image: res.page.featuredImage.node,
                    title: res.page.title
                }
                setBannerTop(banner)
            })
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <div className='section-blog-page'>
            <div className='banner-blog'>
                <Background1 data={bannerTop} />
            </div>
            {
                listItems && <ListItems listItems={listItems} />
            }
        </div>
    );
}

export default Blog;