// import DataOurDevelopersSection from "../../../asset/fakedata/hiredevelopers/dataOurDevelopersSection";
import LeftRightCol from "../../common/LeftRightCol";

const OurDevelopersSection = ({ ourDeveloper }) => {
    console.log(ourDeveloper);
    return (
        <div className="section-our-developers">
            <div className="container">
                {ourDeveloper.map((item, index) => (
                    <LeftRightCol key={index} data={item} />
                ))}
            </div>
        </div>
    )
}
export default OurDevelopersSection;