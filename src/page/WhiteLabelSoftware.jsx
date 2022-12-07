import React from 'react';
import bannerWhiteLabel from '../asset/fakedata/whitelabelsSoftware/banner';
import BackgroundItem from '../components/common/BackgroundItem';
import "../asset/styles/white_label_sofware.css";
import Benefits from '../components/ui/white-label-software-service/Benefist';
import benefits from '../asset/fakedata/whitelabelsSoftware/benefits';
import TimeLine from '../components/ui/white-label-software-service/TimeLine';
import timeLine from '../asset/fakedata/whitelabelsSoftware/timeLine';
import OurServiceWhitePage from '../components/ui/white-label-software-service/OurService';
import WhyChooseWhite from '../components/ui/white-label-software-service/WhyChooseWhite';
import BottomPanelBannerWhite from '../components/ui/white-label-software-service/BottomPanelBannerWhite';
function WhiteLabelSoftware() {
    return (
        <div className='section-white-lable-page'>
            <div className='section-banner-white-lable'>
                <BackgroundItem data={bannerWhiteLabel} />
            </div>

            <div className='section-introduce'>
                <TimeLine data={timeLine} />
                <div className="section-introduce-inner">
                    <div className="container">
                        <div className="introduce-inner run-line show-content">
                            <div className="circle"></div>
                            <div className="content">
                                <p><strong>ONextDigital</strong> will help your business solve all challenges by offering comprehensive outsourcing IT service with seamless incorporation of cutting-edge technology and skilled resources. Possessing 12 years of experience in offering first-rate IT white label software service to a wide range of clients across the globe, we have helped many agencies reduce business expenses, expand portfolios, and build company reputation while enjoying complete ownership safeguarded by strict NDAs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <OurServiceWhitePage />

            <div className='benefits-section'>
                <div className='container'>
                    <div className='benefits-section-inner'>
                        <Benefits data={benefits} />
                    </div>
                </div>
            </div>
            <WhyChooseWhite />
            <BottomPanelBannerWhite />
        </div>
    );
}

export default WhiteLabelSoftware;