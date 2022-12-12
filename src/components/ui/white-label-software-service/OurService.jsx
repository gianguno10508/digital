// import { servicesItem, techsItem } from "../../../asset/fakedata/whitelabelsSoftware/itemOur";
import MainItemCol from "../../common/MainItemCol";
import MainItemCol1 from "../../common/MainItemCol1";

// bg, mainitem
const OurServiceWhitePage = ({ ourServiceWhite }) => {
  // console.log(ourServiceWhite.listImage);
  return (
    <div className="our_services_and_techs-section">
      <div className="container">
        <h2 className="section-title">Our services and techs</h2>
        <div className="section-banner-our">
          {
            ourServiceWhite.image && <img
              src={ourServiceWhite.image.sourceUrl}
              alt=""
            ></img>
          }

        </div>

        <div className="services-list">
          <div className="wapper row">
            {
              ourServiceWhite.items &&
              ourServiceWhite.items.map((item, index) => (
                <div className="services-item " key={index}>
                  <div className="wapper">
                    <MainItemCol1 data={item} />
                  </div>
                </div>
              ))
            }
          </div>


        </div>

        <div className="tech-list ">
          {ourServiceWhite.listImage &&
            ourServiceWhite.listImage.map((item, index) => (
              <div className="tech-item" key={index}>
                <MainItemCol1 data={item} />
              </div>
            ))
          }

        </div>
      </div>
    </div>
  );
};
export default OurServiceWhitePage;