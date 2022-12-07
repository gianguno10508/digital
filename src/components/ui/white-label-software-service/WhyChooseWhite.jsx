import { reasonsItems } from "../../../asset/fakedata/whitelabelsSoftware/itemOur";
import MainItemCol from "../../common/MainItemCol";

const WhyChooseWhite = () => {
  return (
    <div className="why_choose_us-section">
      <div className="container">
        <h2 className="why_choose_us-title">Why choose us</h2>
        <div className="why_choose_us-banner ">
          <div className="row">
            <div className="why_choose_us-banner-left">
              <img
                src="https://onextdigital.com/wp-content/uploads/2022/09/MEM_9933-scaled-e1663144555274.jpg"
                alt=""
              ></img>
            </div>
            <div className="why_choose_us-banner-right">
              <img
                src="https://onextdigital.com/wp-content/uploads/2022/09/MEM_9903-1-scaled-e1663144715272.jpg"
                alt=""
              ></img>
            </div>
          </div>
        </div>
        <div className="reasons-list">
          <div className="row">
            {reasonsItems.map((item, index) => (
              <div className="reasons-items" key={index}>
                <MainItemCol data={item} number={`0${index+1}`} onEffect={false}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyChooseWhite;
