import React from 'react';
import Background1 from '../components/common/Background1';
import '../asset/styles/career.css';
function Career() {
    const data = {
        title: null,
        image: {
            sourceUrl: 'https://onextdigital.com/wp-content/uploads/2022/10/success_road_sign_traffic.jpg',

        },
        img_responsive: 'https://onextdigital.com/wp-content/uploads/2022/10/success_road_sign_traffic.jpg',
        description: null
    }
    return (
        <div className='career-section'>
            <div className='banner-career'>
                <Background1 data={data} />
            </div>
            <div className='border-careers'>
                <div className='container'>
                    <div className='section-table-search'>
                        <div className='search-careers'>

                            <form id='searchform'>
                                <div className='fields'>
                                    <div className="grounp-filter">
                                        <div className="field search">
                                            <input type="text" name="search" placeholder="Search for property…" value="" className="ui-autocomplete-input" autoComplete="off" />
                                        </div>
                                        <div className="field location">
                                            <span className="title-field">Locations</span>
                                            <select name="locations">
                                                <option defaultValue="">Locations</option>
                                                <option defaultValue="82">Hà Nội</option>
                                                <option defaultValue="85">HCM City</option>
                                                <option defaultValue="83" >Phú Thọ</option>
                                                <option defaultValue="84" selected="">Thái Nguyên</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="field submit">
                                        <button className="btn button submit">Search</button>
                                    </div>
                                </div>
                            </form>

                            <div className='list-career'>
                                <div className="heading-table">
                                    <p className="position">Position</p>
                                    <p className="location">Locations</p>
                                    <p className="dateposted">Date Posted</p>
                                </div>
                                <div className='content-search-career'>
                                    <div className='content-table-career'>
                                        <div className="content-table" >
                                            <p className="name-career">
                                                <a href="#">BACK-END MAGENTO DEVELOPER</a>
                                            </p>
                                            <p className="location">
                                                <span>Thái Nguyên</span>
                                            </p>
                                            <p className="dateposted">22 December, 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Career;