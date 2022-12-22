import datasectionAbout from "../asset/fakedata/homepage/sectionAbout";
// import dataweOffer from "../asset/fakedata/homepage/weOffer";
import SessionAbout from "../components/ui/home/SessionAbout";
// import img from "../asset/img/banner-02.png";
import "../asset/styles/homepage_styles.css";
// import itemOffer from "../asset/fakedata/homepage/itemOffer";
import MainItemCol from "../components/common/MainItemCol";
// import itemFact from "../asset/fakedata/homepage/itemFact";
// import itemFeatures from "../asset/fakedata/homepage/itemFeatures";
import BackgroundItem from "../components/common/BackgroundItem";
// import whychoose from "../asset/fakedata/homepage/whychoose";
import ScrollEffect from "../components/common/ScrollEffect";
import MainItemCol1 from "../components/common/MainItemCol1";
import { useEffect, useState } from "react";
import { getContentHomePage } from "../gql/home";
import Loading from "../components/common/Loading";
import FactsFiguresHome from "../components/ui/home/FactsFiguresHome";
function Homepage() {
  const [bannerMain, setBannerMain] = useState([]);
  const [aboutMain, setAboutMain] = useState([]);
  const [homeOurServicesTop, setHomeOurServicesTop] = useState([]);
  const [homeOurServicesListItems, setHomeOurServicesListItems] = useState([]);
  const [factsFigures, setFactsFigures] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [whyChoose, setWhyChoose] = useState([]);
  // console.log(factsFigures);

  useEffect(() => {
    try {
      getContentHomePage().then(function (res) {
        // console.log(res.page.homePage.whyChoose);
        setBannerMain(res.page.featuredImage.node);
        setAboutMain(res.page.homePage.aboutMain);
        setHomeOurServicesTop(res.page.homePage.homeOurServices.top);
        setHomeOurServicesListItems(
          res.page.homePage.homeOurServices.listContent
        );
        setFactsFigures(res.page.homePage.factsFigures.figures);
        setLatestNews(res.page.homePage.latestNews);
        setWhyChoose(res.page.homePage.whyChoose);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Loading
      arrayCheck={bannerMain}
      children={
        <div className="section-home-page">
          <div className="banner-main">
            <picture>
              <source
                media="(max-width:767px)"
                srcSet="https://onextdigital.com/wp-content/uploads/2022/11/mb_banner1.png"
              />
              {bannerMain && <img src={bannerMain.sourceUrl} alt=""></img>}
            </picture>
          </div>

          <div className="section-about-main">
            <div className="container">
              {aboutMain && <SessionAbout data={aboutMain} />}
            </div>
          </div>

          <div className="home-our-services">
            <div className="container">
              <div className="services-we-offer">
                {homeOurServicesTop && (
                  <SessionAbout data={homeOurServicesTop} />
                )}
              </div>
              <div className="home-our-services-list row">
                {homeOurServicesListItems &&
                  homeOurServicesListItems.map((item, index) => (
                    <div
                      className="our-services-item col-lg-4 col-md-4 col-sm-6"
                      key={index}
                    >
                      <ScrollEffect
                        children={
                          <div className="wapper">
                            <MainItemCol1 data={item} />
                          </div>
                        }
                      />
                      <div className="hover">
                        <MainItemCol data={item.hover} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {factsFigures && (
            <div className="section-facts-figures">
              <div className="container">
                {/* <ScrollEffect children={<h2>Facts & Figures </h2>} />
                <div className="facts-figures-list row">
                  {factsFigures.map((item, index) => (
                    <div
                      className="facts-figures-item col-lg-4 col-sm-6 col-md-4"
                      key={index}
                    >
                      <MainItemCol1 data={item} />
                    </div>
                  ))}
                </div> */}
                <FactsFiguresHome figures={factsFigures} />
              </div>
            </div>
          )}

          {latestNews && (
            <ScrollEffect
              children={
                <div className="section-home-features">
                  <div className="container">
                    <h2>Latest news</h2>
                    <div className="latest-list row">
                      {latestNews.map((item, index) => (
                        <div
                          className="latest-items col-sm-12 col-lg-3"
                          key={index}
                        >
                          <div className="wapper">
                            <BackgroundItem data={item} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              }
            />
          )}

          {whyChoose && (
            <ScrollEffect
              children={
                <div className="home-home-insights">
                  <div className="container">
                    <div className="home-insights-list row">
                      <div className="fist-item-insights col-lg-4 ">
                        <div className="sub-heading">
                          <span>Why choose us</span>
                        </div>
                        <h2>Reasons to Go with Us</h2>
                      </div>
                      {whyChoose.map((item, index) => (
                        <div className="insights-items col-lg-4 " key={index}>
                          <div className="wapper">
                            <MainItemCol1 data={item} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              }
            />
          )}

          <div className="home-home-contact-us">
            <div className="background-img">
              <div className="container">
                <ScrollEffect
                  children={
                    <div className="contact-us-title">
                      <h2>Got a project or partnership in mind?</h2>
                      <div className="button-more">
                        <a href="#">Contact Us</a>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default Homepage;
