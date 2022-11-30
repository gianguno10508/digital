import DataOurDevelopersSection from "../../../asset/fakedata/hiredevelopers/dataOurDevelopersSection";
import LeftRightCol from "../../common/LeftRightCol";

const OurDevelopersSection = () =>{
    return(
        <div className="section-our-developers">
            <div className="container">
                {DataOurDevelopersSection.map((item, index)=>(
                    <LeftRightCol data={item} />
                ))}
            </div>
        </div>
    )
}
export default OurDevelopersSection;