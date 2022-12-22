import React, { useEffect, useState } from "react";
import { bannerBottomSection } from "../asset/fakedata/uxuidesign/bannerUxUi";
import "../asset/styles/uxuidesignservice.css";
import Background1 from "../components/common/Background1";
import BackgroundItem from "../components/common/BackgroundItem";
import TopContent from "../components/ui/ux-ui-design-service/TopContent";
import WhyAhtSolution from "../components/ui/ux-ui-design-service/WhyAhtSolution";
import { getContentUxUiDesign } from "../gql/ux-ui-design-service";
import { Fade } from "react-reveal";
import ScrollEffect from "../components/common/ScrollEffect";
import Loading from "../components/common/Loading";

function UxUiDesignService() {
  const [onextDigital, setOnextDigital] = useState([]);
  const [banner, setBanner] = useState({});
  const [bannerBottomUxUi, setbannerBottomUxUi] = useState([]);
  const [whychoose, setWhyChoose] = useState([]);
  // console.log(onextDigital);
  useEffect(() => {
    try {
      getContentUxUiDesign().then(function (res) {
        setOnextDigital(res.page.uxUiDesign.onextdigital.items);
        setWhyChoose(res.page.uxUiDesign.whyChooseUs);
        setbannerBottomUxUi(res.page.uxUiDesign.toolsItems);
        const bannerUxUi = {
          title: res.page.title,
          description: res.page.content,
          image: res.page.featuredImage.node,
        };
        setBanner(bannerUxUi);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Loading
      arrayCheck={onextDigital}
      children={
        <div className="section-uxui-design-service">
          <Fade bottom>{banner.image && <BackgroundItem data={banner} />}</Fade>
          <div className="design-services-section">
            <div className="container">
              <ScrollEffect
                children={
                  <>
                    <TopContent data={onextDigital} />
                    {bannerBottomUxUi.map((item, index) => (
                      <Background1 key={index} data={item} />
                    ))}
                  </>
                }
              />
            </div>
          </div>
          <div className="why-aht-solution-section">
            <div className="container">
              <WhyAhtSolution whychoose={whychoose} />
            </div>
          </div>
          <div className="why-aht-solution-bottom-section">
            <div className="container">
              <Background1 data={bannerBottomSection} />
            </div>
          </div>
        </div>
      }
    />
  );
}

export default UxUiDesignService;
