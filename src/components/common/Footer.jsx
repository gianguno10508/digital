import React from 'react';
import logoW from '../../asset/img/LOGO_WHITE.png';
import logo from '../../asset/img/tải xuống.png';
import img1 from '../../asset/img/aht-tech-jsc.png';
import img2 from '../../asset/img/mage-solution.png';
import img3 from '../../asset/img/onnet-consulting.png';
import '../../asset/styles/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-main'>
            <div className='footer-wapper container'>

                <div className='footer-section-inner'>
                    {/* _______LOGO______ */}
                    <div className='footer-logo'>
                        <a href='#' className='logo-img'><img src={logoW} alt='logoW'></img></a>
                        <p className='footer-info'>
                            <span>ONEXT DIGITal</span>
                            helps your business grow through the utilization
                            of technology and an innovative mindset. We have a
                            history of going over and above because we not only
                            complete projects on time &#9472; we find ways to support our
                            customers to achieve their specific goals.
                        </p>

                        <div className='footer-widgets-social'>
                            <a href='#'><i className="fa-brands fa-facebook"></i></a>
                            <a href='#'><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>

                        <div className='skew-rating-rating'>
                            <a href='#' className='skew-rating-icon'>
                                <img src={logo} alt='logo'></img>
                            </a>
                            <div className='skew-rating-rating-content-layer'>
                                <div className='skew-rating-rating-score'>
                                    <p className='rating-dark'>4.8</p>
                                    <div className='reviews-totals-stars'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <span>&nbsp;(2)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* _______CONTENT_______________ */}
                    <div className='footer-top has-footer-menu'>
                        <div className='footer-services'>
                            <h5>Services</h5>
                            <ul>
                                <li><Link to='/web-development'>Web Development</Link></li>
                                <li><Link to='/mobile-app-development'>Mobile App Development</Link></li>
                                <li><Link to='/ux-ui-design-service'>UX/UI Design Service</Link></li>
                                <li><Link to='/hire-developers'>Headless Commerce Development</Link></li>
                                <li><Link to='/white-label-software-service'>White label software service</Link></li>
                            </ul>
                        </div>

                        <div className='footer-about'>
                            <h5>Aboutt Us</h5>
                            <ul>
                                <li><Link to='/about-us'>About Us</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/case-studies'>Case studies</Link></li>
                                <li><Link to='/career'>Careers</Link></li>
                            </ul>
                        </div>

                        <div className='footer-contact'>
                            <h5>contact</h5>
                            <ul>
                                <li><a href='#'><i className="fa-brands fa-whatsapp"></i>WhatsApp</a></li>
                                <li><a href='#'><i className="fa-brands fa-skype"></i>Skype</a></li>
                                <li><a href='#'><i className="fa-solid fa-envelope"></i>info@onextdigital.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* _____________association_____ */}
                <div className='footer-association'>
                    <a href='#'> <img src={img1} alt='img1'></img></a>
                    <a href='#'><img src={img2} alt='img2'></img></a>
                    <a href='#'> <img src={img3} alt='img3'></img></a>
                </div>
                {/* _____________credits_____ */}
                <div className='footer-credits'>
                    <p id='year'>Copyright &#169;
                        {(new Date().getFullYear())}
                        . ONEXT DIGITAL
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Footer;