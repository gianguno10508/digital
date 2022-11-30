import LeftRightCol from "../../../components/common/LeftRightCol";
import contentLeftRight from "../../../asset/fakedata/webdevelopment/contentLeftRight";

const SessionService = () =>{
    return (
        <div className="section-service">
            <div className="container">
                {contentLeftRight.map((item, index)=>(
                    <LeftRightCol data={item} />
                ))}
            </div>
        </div>
    )
}
export default SessionService;