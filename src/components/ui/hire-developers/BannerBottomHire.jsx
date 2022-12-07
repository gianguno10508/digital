import bannerBottomHireDeveloper from "../../../asset/fakedata/hiredevelopers/dataBannerBottomHire";
import ItemHasBackground from "../../common/ItemHasBackground";

const BannerBottomHire = () =>{
    return(
        <div className="section-bottom-hire">
            <div className="container">
                <ItemHasBackground data={bannerBottomHireDeveloper} onEffectTitle={true} />
            </div>
        </div>
    )
}
export default BannerBottomHire;