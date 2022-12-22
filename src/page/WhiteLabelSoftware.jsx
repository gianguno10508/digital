import React, { useEffect, useState } from "react";
// import bannerWhiteLabel from "../asset/fakedata/whitelabelsSoftware/banner";
import BackgroundItem from "../components/common/BackgroundItem";
import "../asset/styles/white_label_sofware.css";
import Benefits from "../components/ui/white-label-software-service/Benefist";
// import benefits from "../asset/fakedata/whitelabelsSoftware/benefits";
import TimeLine from "../components/ui/white-label-software-service/TimeLine";
// import timeLine from "../asset/fakedata/whitelabelsSoftware/timeLine";
import OurServiceWhitePage from "../components/ui/white-label-software-service/OurService";
import WhyChooseWhite from "../components/ui/white-label-software-service/WhyChooseWhite";
import BottomPanelBannerWhite from "../components/ui/white-label-software-service/BottomPanelBannerWhite";
import { Fade } from "react-reveal";
import { getContentWhiteLabelSoftware } from "../gql/white-label-software-service";
import Background1 from "../components/common/Background1";
import Loading from "../components/common/Loading";
function WhiteLabelSoftware() {
  const [bannerWhiteLabel, setBannerWhiteLabel] = useState([]);
  const [ourServiceWhite, setOurServiceWhite] = useState([]);
  const [digital, setDigital] = useState([]);
  const [whyChooseUs, setWhyChooseUs] = useState([]);
  const [timeLine, setTimeLine] = useState([]);
  // console.log(timeLine);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    try {
      getContentWhiteLabelSoftware().then(function (res) {
        // console.log(res);
        setOurServiceWhite(res.page.whiteLabelSoftwareService.ourServices);
        setWhyChooseUs(res.page.whiteLabelSoftwareService.whyChooseUs);
        setTimeLine(res.page.whiteLabelSoftwareService.timeLine);
        const banner = {
          title: res.page.title,
          content: res.page.content,
          image: res.page.featuredImage.node,
        };
        const itemDigital = {
          title: res.page.whiteLabelSoftwareService.digital.title,
          img: res.page.whiteLabelSoftwareService.digital.image.sourceUrl,
          content: res.page.whiteLabelSoftwareService.digital.digital,
        };
        setBannerWhiteLabel(banner);
        setDigital(itemDigital);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Loading
      arrayCheck={bannerWhiteLabel}
      children={
        <div className="section-white-lable-page">
          <div className="section-banner-white-lable">
            <Fade bottom>
              {bannerWhiteLabel && <Background1 data={bannerWhiteLabel} />}
            </Fade>
          </div>
          {timeLine && <TimeLine data={timeLine} />}
          <OurServiceWhitePage ourServiceWhite={ourServiceWhite} />
          <div className="benefits-section">
            <div className="container">
              <div className="benefits-section-inner">
                {digital && <Benefits data={digital} />}
              </div>
            </div>
          </div>
          <WhyChooseWhite whyChooseUs={whyChooseUs} />
          <BottomPanelBannerWhite />
        </div>
      }
    />
  );
}

export default WhiteLabelSoftware;
