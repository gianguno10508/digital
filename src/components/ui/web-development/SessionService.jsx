import LeftRightCol from "../../../components/common/LeftRightCol";
import contentLeftRight from "../../../asset/fakedata/webdevelopment/contentLeftRight";
import { Markup } from "interweave";
import ScrollEffect from "../../common/ScrollEffect";

const SessionService = ({data}) =>{
    console.log(data);
    //console.log(typeof(data));
    return (
        <div className="section-service">
            <div className="container">
                {data.map((item, index)=>(
                    <ScrollEffect children={<LeftRightCol key={index} data={item} />} />
                ))}
                {/* <Markup content={data.image.sourceUrl} /> */}
                {/* <Markup content={data} /> */}
            </div>
        </div>
    )
}
export default SessionService;