import React from 'react';
import bannerWhiteLabel from '../asset/fakedata/whitelabelsSoftware/banner';
import BackgroundItem from '../components/common/BackgroundItem';
import "../asset/styles/white_label_sofware.css";
import { reasonsItems, servicesItem, techsItem } from '../asset/fakedata/whitelabelsSoftware/itemOur';
import MainItemCol from '../components/common/MainItemCol';
import Benefits from '../components/ui/white-label-software-service/Benefist';
import benefits from '../asset/fakedata/whitelabelsSoftware/benefits';
function WhiteLabelSoftware() {
    return (
        <div className='section-white-lable-page'>
            <div className='section-banner-white-lable'>
                <BackgroundItem data={bannerWhiteLabel} />
            </div>

            <div className='section-introduce'>

            </div>

            <div className='our_services_and_techs-section'>
                <div className='container'>
                    <h2 className='section-title'>Our services and techs</h2>
                    <div className='section-banner-our'>
                        <img
                            src='https://onextdigital.com/wp-content/uploads/2022/07/Rectangle-32.jpg'
                            alt=''
                        >
                        </img>
                    </div>

                    <div className='services-list row'>
                        {
                            servicesItem.map((item, index) => (
                                <div className='services-item ' key={index}>
                                    <div className='wapper'>
                                        <MainItemCol data={item} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className='tech-list '>
                        {
                            techsItem.map((item, index) => (
                                <div className='tech-item'>
                                    <MainItemCol data={item} />
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>

            <div className='benefits-section'>
                <div className='container'>
                    <div className='benefits-section-inner'>
                        <Benefits data={benefits} />
                    </div>
                </div>

            </div>

            <div className='why_choose_us-section'>
                <div className='container'>
                    <h2 className='why_choose_us-title'>Why choose us</h2>

                    <div className='why_choose_us-banner '>
                        <div className='row'>
                            <div className='why_choose_us-banner-left'>
                                <img src='https://onextdigital.com/wp-content/uploads/2022/09/MEM_9933-scaled-e1663144555274.jpg' alt=''></img>
                            </div>
                            <div className='why_choose_us-banner-right'>
                                <img src='https://onextdigital.com/wp-content/uploads/2022/09/MEM_9903-1-scaled-e1663144715272.jpg' alt=''></img>

                            </div>
                        </div>
                    </div>


                    <div className='reasons-list'>
                        <div className='row'>
                            {
                                reasonsItems.map((item, index) => (
                                    <div className='reasons-items' key={index}>
                                        <MainItemCol data={item} number={`0${index + 1}`} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>


                </div>

            </div>

            <div className='bottom_panel_banner-section'>
                <div className='container'>
                    <div className='wapper'>
                        <h2 className='bottom_panel_banner-title'>
                            Ready to experience first-rate service quality with us?
                        </h2>
                        <p className='bottom_panel_banner-description'>
                            Outsource IT Services with the Most Talented Engineers in the Industry
                        </p>
                        <div className='button-more'>
                            <a href='#'>Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default WhiteLabelSoftware;