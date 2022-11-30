import bannerBottomHireDeveloper from "../../../asset/fakedata/hiredevelopers/dataBannerBottomHire";
import BackgroundItem from "../../common/BackgroundItem";

const BannerBottomHire = () =>{
    return(
        <div className="section-bottom-hire">
            <div className="container">
                <BackgroundItem data={bannerBottomHireDeveloper} />
            </div>
        </div>
    )
}
export default BannerBottomHire;