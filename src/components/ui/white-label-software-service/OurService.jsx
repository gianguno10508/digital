import { servicesItem, techsItem } from "../../../asset/fakedata/whitelabelsSoftware/itemOur";
import MainItemCol from "../../common/MainItemCol";

// bg, mainitem
const OurServiceWhitePage = () => {
  return (
    <div className="our_services_and_techs-section">
      <div className="container">
        <h2 className="section-title">Our services and techs</h2>
        <div className="section-banner-our">
          <img
            src="https://onextdigital.com/wp-content/uploads/2022/07/Rectangle-32.jpg"
            alt=""
          ></img>
        </div>

        <div className="services-list row">
          {servicesItem.map((item, index) => (
            <div className="services-item " key={index}>
              <div className="wapper">
                <MainItemCol data={item} />
              </div>
            </div>
          ))}
        </div>

        <div className="tech-list ">
          {techsItem.map((item, index) => (
            <div className="tech-item">
              <MainItemCol data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurServiceWhitePage;