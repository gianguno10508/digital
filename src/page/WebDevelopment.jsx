import bannerWebdevelop from "../asset/fakedata/webdevelopment/bannerWebdevelop";
import BackgroundItem from "../components/common/BackgroundItem";
import '../asset/styles/web_development_styles.css';
import SessionService from "../components/ui/web-development/SessionService";
import ChooseUsWeb from "../components/ui/web-development/ChooseUsWeb";
import SessionBottom from "../components/ui/web-development/SessionBottom";
import { useEffect, useState } from "react";
import { getContentWebDevelopment } from "../gql/web-development";

function WebDevelopment(){
    const [services, setServices] = useState("");
    useEffect(() => {
        try {
            getContentWebDevelopment().then(function (res){
            console.log(res);
            setServices(res.page.content)
          })
        } catch (error) {
          console.log(error);
        }
      }, [])
    return(
        <div className="web-develop">
            <BackgroundItem data={bannerWebdevelop} />
            <SessionService data={services}/>
            <ChooseUsWeb />
            <SessionBottom />
        </div>
    )
}
export default WebDevelopment;