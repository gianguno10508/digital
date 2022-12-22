import React, { useEffect, useState } from "react";
// import { bannerMobileapp } from '../asset/fakedata/mobileapp/bannerMobileapp';
import "../asset/styles/mobile-app-development.css";
import Background1 from "../components/common/Background1";
import Loading from "../components/common/Loading";
import ScrollEffect from "../components/common/ScrollEffect";
import AppFeatures from "../components/ui/mobile-app-development/AppFeatures";
import BottomPanel from "../components/ui/mobile-app-development/BottomPanel";
import Madp from "../components/ui/mobile-app-development/Madp";
import MobileServiceBottom from "../components/ui/mobile-app-development/MobileServiceBottom";
import MobileServiceTop from "../components/ui/mobile-app-development/MobileServiceTop";
import OurTechnologyStack from "../components/ui/mobile-app-development/OurTechnologyStack";
import { getContentMobileAppDevelopment } from "../gql/mobile-app-development";

function MobileAppdevelopment() {
  const [bannerDevelopment, setBannerDevelopment] = useState([]);
  const [ourServicesMobile, setOurServicesMobile] = useState([]);
  const [itemsourServicesMobile, setItemsOurServicesMobile] = useState([]);
  const [ourTechnologyStack, setOurTechnologyStack] = useState([]);
  const [bannerAppFeatures, setBannerAppFeatures] = useState([]);
  const [itemsAppFeatures, setItemsAppFeatures] = useState([]);
  const [bannerOurMobile, setBannerOurMobile] = useState([]);
  const [itemsOurMobile, setItemsOurMobile] = useState([]);
  // console.log(itemsOurMobile);

  useEffect(() => {
    try {
      getContentMobileAppDevelopment().then(function (res) {
        setOurTechnologyStack(res.page.mobileAppDevelopment.ourTechnologyStack);
        setOurServicesMobile(
          res.page.mobileAppDevelopment.ourServices.services[0]
        );
        setItemsOurServicesMobile(
          res.page.mobileAppDevelopment.ourServices.items
        );
        setBannerAppFeatures(
          res.page.mobileAppDevelopment.appFeatures.bannerTitle
        );
        setItemsAppFeatures(res.page.mobileAppDevelopment.appFeatures.items);
        setBannerOurMobile(res.page.mobileAppDevelopment.ourMobile.bannerTitle);
        setItemsOurMobile(res.page.mobileAppDevelopment.ourMobile.items);

        const banner = {
          content: res.page.content,
          image: res.page.featuredImage.node,
        };
        setBannerDevelopment(banner);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Loading
      arrayCheck={bannerDevelopment}
      children={
        <div className="section-mobile-app-development">
          <div className="mobile-app-development-banner">
            {bannerDevelopment && <Background1 data={bannerDevelopment} />}
          </div>

          <div className="mobile-service-section">
            <div className="container">
              <div className="mobile-service-heder">
                <ScrollEffect children={<h2>Our services </h2>} />
              </div>
              <div className="mobile-service-content">
                {itemsourServicesMobile && (
                  <MobileServiceTop data={itemsourServicesMobile} />
                )}
                {ourServicesMobile && (
                  <MobileServiceBottom data={ourServicesMobile} />
                )}
              </div>
            </div>
          </div>

          <div className="our_technology_stack-section">
            {ourTechnologyStack && (
              <OurTechnologyStack data={ourTechnologyStack} />
            )}
          </div>

          <div className="app_features-section">
            {bannerAppFeatures && (
              <AppFeatures
                banner={bannerAppFeatures}
                items={itemsAppFeatures}
              />
            )}
          </div>

          <div className="madp-section">
            {bannerOurMobile && (
              <Madp banner={bannerOurMobile} items={itemsOurMobile} />
            )}
          </div>

          <div className="bottom_panel_banner-section">
            <BottomPanel />
          </div>
        </div>
      }
    />
  );
}

export default MobileAppdevelopment;
