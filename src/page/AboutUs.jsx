import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import "../asset/styles/aboutus.css";
import BackgroundItem from "../components/common/BackgroundItem";
import Loading from "../components/common/Loading";
import BannerBottom from "../components/ui/about-us/BannerBottom";
import FactsFigures from "../components/ui/about-us/FactsFigures";
import OurTeam from "../components/ui/about-us/OurTeam";
import OurVision from "../components/ui/about-us/OurVision";
import WhyChooseUs from "../components/ui/about-us/WhyChooseUs";
import { getContentAboutUs } from "../gql/about-us";
function AboutUs() {
  const [bannerAboutus, setBannerAboutUs] = useState([]);
  const [figures, setFigures] = useState([]);
  const [ourVision, setOurVision] = useState([]);
  const [ourTeam, setOurTeam] = useState([]);
  const [items, setItems] = useState([]);
  // console.log(items);
  useEffect(() => {
    try {
      getContentAboutUs().then(function (res) {
        // console.log(res);
        setFigures(res.page.aboutUs.figures);
        setOurVision(res.page.aboutUs.ourVision);
        setOurTeam(res.page.aboutUs.ourTeam);
        setItems(res.page.aboutUs.items);
        const banner = {
          description: res.page.content,
          title: res.page.title,
          image: res.page.featuredImage.node,
        };
        setBannerAboutUs(banner);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Loading
      arrayCheck={figures}
      children={
        <div className="about-us-section">
          <div className="about-us-banner-top">
            {bannerAboutus.image && (
              <Fade bottom>
                <BackgroundItem data={bannerAboutus} />
              </Fade>
            )}
          </div>
          <div className="facts_figures-section">
            <div className="container">
              <FactsFigures figures={figures} />
            </div>
          </div>

          <div className="our_vision-section">
            <div className="container">
              <div className="wapper">
                <OurVision ourVision={ourVision} />
              </div>
            </div>
          </div>

          <div className="our_technological_expertise-section">
            <OurTeam ourTeam={ourTeam} />
          </div>

          <div className="why-choose-us-section">
            <WhyChooseUs items={items} />
          </div>

          <div className="why-choose-us-banner-bottom">
            <BannerBottom />
          </div>
        </div>
      }
    />
  );
}

export default AboutUs;
