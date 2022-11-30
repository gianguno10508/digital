import bannerHireDeveloper from "../asset/fakedata/hiredevelopers/bannerHireDeveloper";
import BackgroundItem from "../components/common/BackgroundItem";
import BannerBottomHire from "../components/ui/hire-developers/BannerBottomHire";
import OurDevelopersSection from "../components/ui/hire-developers/OurDevelopersSection";
import '../asset/styles/hire_developers_styles.css';

function HireDevelopers(){
    return(
        <div className="hire-develop">
            <BackgroundItem data={bannerHireDeveloper} />
            <OurDevelopersSection />
            <BannerBottomHire />
        </div>
    )
}
export default HireDevelopers;