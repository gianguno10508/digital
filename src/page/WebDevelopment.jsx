import bannerWebdevelop from "../asset/fakedata/webdevelopment/bannerWebdevelop";
import BackgroundItem from "../components/common/BackgroundItem";
import '../asset/styles/web_development_styles.css';

function WebDevelopment(){
    return(
        <div className="web-develop">
            <BackgroundItem data={bannerWebdevelop} />
        </div>
    )
}
export default WebDevelopment;