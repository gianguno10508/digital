// import bannerHireDeveloper from "../asset/fakedata/hiredevelopers/bannerHireDeveloper";
import BackgroundItem from "../components/common/BackgroundItem";
import BannerBottomHire from "../components/ui/hire-developers/BannerBottomHire";
import OurDevelopersSection from "../components/ui/hire-developers/OurDevelopersSection";
import "../asset/styles/hire_developers_styles.css";
import { useEffect, useState } from "react";
import { getContentHireDevelopers } from "../gql/hire-developer";
import Loading from "../components/common/Loading";

function HireDevelopers() {
  const [bannerTop, setBannerTop] = useState([]);
  const [ourDeveloper, setOurDeveloper] = useState([]);
  // console.log(ourDeveloper);

  useEffect(() => {
    try {
      getContentHireDevelopers().then(function (res) {
        setOurDeveloper(res.page.hireDevelopers.listItems);
        const banner = {
          title: res.page.title,
          description: res.page.content,
          image: res.page.featuredImage.node,
        };
        setBannerTop(banner);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Loading
      arrayCheck={bannerTop}
      children={
        <div className="hire-develop">
          {bannerTop.image && <BackgroundItem data={bannerTop} />}
          {ourDeveloper && <OurDevelopersSection ourDeveloper={ourDeveloper} />}
          <BannerBottomHire />
        </div>
      }
    />
  );
}
export default HireDevelopers;
