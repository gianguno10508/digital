
import dataBannerBottomSolution from "../../../asset/fakedata/oursolution/dataBannerBottomSolution";
import ItemHasBackground from "../../common/ItemHasBackground";

const BannerBottomSolution = () =>{
    return(
        <div className="section-bottom-solution">
            <div className="container">
                <ItemHasBackground data={dataBannerBottomSolution} onEffectTitle={true} />
            </div>
        </div>
    )
}
export default BannerBottomSolution;