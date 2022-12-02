import React from 'react';
import { bannerBottomSection, bannerBottomUxUi, bannerUxUi } from '../asset/fakedata/uxuidesign/bannerUxUi';
import '../asset/styles/uxuidesignservice.css';
import BackgroundItem from '../components/common/BackgroundItem';
import TopContent from '../components/ui/ux-ui-design-service/TopContent';
import WhyAhtSolution from '../components/ui/ux-ui-design-service/WhyAhtSolution';


function UxUiDesignService() {
    return (
        <div className='section-uxui-design-service'>
            <BackgroundItem data={bannerUxUi} />
            <div className='design-services-section'>
                <div className='container'>
                    <TopContent />
                    <BackgroundItem data={bannerBottomUxUi} />
                </div>
            </div>

            <div className='why-aht-solution-section'>
                <div className='container'>
                    <WhyAhtSolution />
                </div>

            </div>

            <div className='why-aht-solution-bottom-section'>
                <div className='container'>
                    <BackgroundItem data={bannerBottomSection} />
                </div>
            </div>

        </div>
    );
}

export default UxUiDesignService;