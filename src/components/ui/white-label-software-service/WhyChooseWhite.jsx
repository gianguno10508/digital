// import { reasonsItems } from "../../../asset/fakedata/whitelabelsSoftware/itemOur";
// import MainItemCol from "../../common/MainItemCol";
import MainItemCol1 from "../../common/MainItemCol1";

const WhyChooseWhite = ({ whyChooseUs }) => {
  // console.log(whyChooseUs.items);
  return (
    <div className="why_choose_us-section">
      <div className="container">
        <h2 className="why_choose_us-title">Why choose us</h2>
        <div className="why_choose_us-banner ">
          <div className="row">
            {
              whyChooseUs.image &&
              whyChooseUs.image.map((item, index) => (
                <div className="why_choose_us-banner" key={index}>
                  <img
                    src={item.sourceUrl}
                    alt=""
                  ></img>
                </div>
              ))

            }


          </div>
        </div>
        <div className="reasons-list">
          <div className="row">
            {whyChooseUs.items &&
              whyChooseUs.items.map((item, index) => (
                <div className="reasons-items" key={index}>
                  <MainItemCol1 data={item} number={`0${index + 1}`} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyChooseWhite;
