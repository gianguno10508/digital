import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Background1 from '../components/common/Background1';
import ListItems from '../components/ui/blog/ListItems';
import { getContentBlog } from '../gql/blog';
import '../asset/styles/blog.css';
import '../asset/styles/web_development_styles.css';
import SessionBottom from '../components/ui/web-development/SessionBottom';
import ScrollEffect from '../components/common/ScrollEffect';

function Blog() {
    const [bannerTop, setBannerTop] = useState([]);
    const [listItems, setlistItems] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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

    const [pageNumber, setPageNumber] = useState(0);
    const usersperPage = 5;
    const pagesVisited = pageNumber * usersperPage;
    const pageCount = Math.ceil(listItems.length / usersperPage);
    console.log(pageCount);
    const onPageChange = ({ selected }) => {
        setPageNumber(selected)
    }


    const displayUsers = listItems.slice(pagesVisited, pagesVisited + usersperPage)
        .map((item, index) => (
            <ListItems item={item} index={index} />
        ))
    console.log(listItems);
    return (
        <div className='section-blog-page'>
            <div className='banner-blog'>
                <Background1 data={bannerTop} />
            </div>
            <div className='container'>
                <div className='list-blog'>
                    {displayUsers}
                </div>
            </div>
            <div className='pagination-wrapper section-pagination-inner'>
                <div className='navigation-pagination'>
                    {
                        listItems.length > usersperPage ? (
                            <ReactPaginate
                                previousLabel={<i className="fa-solid fa-arrow-left"></i>}
                                nextLabel={<i className="fa-solid fa-arrow-right"></i>}
                                pageCount={pageCount}
                                onPageChange={onPageChange}
                                containerClassName={'paginationBttns'}
                                previousLinkClassName={'previousBttn'}
                                nextLinkClassName={'nextBttn'}
                                disabledClassName={'paginationDisabled'}
                                activeClassName={'paginationActive'}
                            />
                        ) : null
                    }
                </div>

            </div>
            <div className='web-develop '>
                <ScrollEffect children={<SessionBottom />} />
            </div>


        </div>
    );
}

export default Blog;