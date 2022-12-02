import BackgroundItem from "../components/common/BackgroundItem";
import '../asset/styles/web_development_styles.css';
import SessionService from "../components/ui/web-development/SessionService";
import ChooseUsWeb from "../components/ui/web-development/ChooseUsWeb";
import SessionBottom from "../components/ui/web-development/SessionBottom";
import { useEffect, useState } from "react";
import { getContentWebDevelopment } from "../gql/web-development";

function WebDevelopment(){
    const [banner, setBanner] = useState([]);
    const [services, setServices] = useState([]);
    useEffect(() => {
        try {
            getContentWebDevelopment().then(function (res){
            setServices(res.page.webdevelopment.services);
            const bannerWebdevelop = {
              content: res.page.content,
              img: res.page.featuredImage.node.sourceUrl
            }
            setBanner(bannerWebdevelop);
          })
        } catch (error) {
          console.log(error);
        }
      }, [])
    return(
        <div className="web-develop">
            <BackgroundItem data={banner} />
            <SessionService data={services}/>
            <ChooseUsWeb />
            <SessionBottom />
        </div>
    )
}
export default WebDevelopment;