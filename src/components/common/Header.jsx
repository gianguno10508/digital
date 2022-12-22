import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logoB from '../../asset/img/LOGO_brown.png';
import logoW from '../../asset/img/LOGO_WHITE.png'
import '../../asset/styles/header.css';
import $ from 'jquery';
import useScrollDirection from './useScrollDirection';
function Header() {
    const [top, setTop] = useState('header');

    const navRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 150) {
                setTop('header')
            }
            else {
                setTop('')
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {

            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }



    $(document).ready(function () {
        var selector = '.header-navigation-wrapper li a';

        $(selector).on('click', function () {
            $(selector).removeClass('active');
            $(this).addClass('active');
        });
    })

    const scrollDirection = useScrollDirection();


    return (

        <div className={`header-main ${scrollDirection === "down" ? "hide" : "show"} ${top}`}>
            <div className='header-wapper section-inner'>
                {/* _______LOGO______ */}
                <div className='header-logo-wapper'>
                    <Link to='/'><img className='LOGO_brown' src={logoB} alt='LOGO_brown'></img></Link>
                    <Link to='/'><img className='LOGO_WHITE' src={logoW} alt='LOGO_WHITE'></img></Link>
                </div>

                {/* _______NAVIGATION______ */}
                <ul ref={navRef} className='header-navigation-wrapper'>
                    <li className='active'><Link to='/' className='active'>home</Link></li>
                    <li >
                        <Link to='/web-development'>Services</Link>
                        <span><i className="fa-solid fa-chevron-down"></i></span>
                        {/* _______SUB-Menu______ */}
                        <ul className='header-sub-menu'>
                            <li><Link to='/web-development'>Web Development</Link></li>
                            <li><Link to='/white-label-software-service'>White label software service</Link></li>
                            <li><Link to='/ux-ui-design-service'>UX/UI Design Service</Link></li>
                            <li><Link to='/mobile-app-development'>Mobile App Development</Link></li>
                            <li><Link to='/hire-developers'>Hire developers</Link></li>
                        </ul>
                    </li>
                    <li><Link to='/our-solution'>Our solutions</Link></li>
                    <li><Link to='/case-studies'>Case studies</Link></li>
                    <li><Link to='/about-us'>About Us</Link></li>
                    <li className='get-in'><Link to='/contact'>GET IN TOUch</Link></li>

                    {/* _______ICON-MOBI_________ */}


                </ul>
                <button className="nav-btn" onClick={showNavbar}>
                    <i className="fa-solid fa-bars"></i>
                </button>

            </div>
        </div>


    );
}

export default Header;