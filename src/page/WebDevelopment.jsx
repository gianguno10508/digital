import bannerWebdevelop from "../asset/fakedata/webdevelopment/bannerWebdevelop";
import BackgroundItem from "../components/common/BackgroundItem";
import '../asset/styles/web_development_styles.css';
import SessionService from "../components/ui/web-development/SessionService";
import ChooseUsWeb from "../components/ui/web-development/ChooseUsWeb";
import SessionBottom from "../components/ui/web-development/SessionBottom";

function WebDevelopment(){
    return(
        <div className="web-develop">
            <BackgroundItem data={bannerWebdevelop} />
            <SessionService />
            <ChooseUsWeb />
            <SessionBottom />
        </div>
    )
}
export default WebDevelopment;