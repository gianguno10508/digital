import React from 'react';
import img from '../asset/img/banner-02.png';
import '../asset/styles/homepage_styles.css';
import SessionAbout from '../components/ui/home/SessionAbout';

function Homepage(props) {
    const data = [
        {
            sub_heading: 'acb',
            title: 'we are',
            description: 'With the growth and development of social media and digital platforms, businesses can not succeed without a strong digital presence. ONEXT DIGITAL takes pride in delivering quality-focused software products that improve the online success of businesses. We provide a range of professional solutions and services, specifically CMS & eCommerce Website, Web app and Mobile Apps that aid in the innovation and success of your online business.',
            sub_content_second: 'Contact us today to take your business to the next level!'
        }
    ]
    return (
        <div className='section-home-main'>
            <div className='banner-main' >
                <img src={img} alt='img'></img>
            </div>
            <div className='section-about'>
                <SessionAbout rest={data} />
            </div>
        </div>
    );
}

export default Homepage;