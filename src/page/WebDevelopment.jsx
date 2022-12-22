import BackgroundItem from "../components/common/BackgroundItem";
import "../asset/styles/web_development_styles.css";
import SessionService from "../components/ui/web-development/SessionService";
import ChooseUsWeb from "../components/ui/web-development/ChooseUsWeb";
import SessionBottom from "../components/ui/web-development/SessionBottom";
import { useEffect, useState } from "react";
import { getContentWebDevelopment } from "../gql/web-development";
import ScrollEffect from "../components/common/ScrollEffect";
import Loading from "../components/common/Loading";

function WebDevelopment() {
  const [banner, setBanner] = useState({});
  const [services, setServices] = useState([]);
  useEffect(() => {
    try {
      getContentWebDevelopment().then(function (res) {
        setServices(res.page.webdevelopment.services);
        const bannerWebdevelop = {
          title: res.page.content,
          image: {
            sourceUrl: res.page.featuredImage.node.sourceUrl,
          },
        };
        setBanner(bannerWebdevelop);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Loading
      arrayCheck={services}
      children={
        <div className="web-develop">
          {banner.title && <BackgroundItem data={banner} />}
          <SessionService data={services} />
          <ChooseUsWeb />
          <ScrollEffect children={<SessionBottom />} />
        </div>
      }
    />
  );
}
export default WebDevelopment;
