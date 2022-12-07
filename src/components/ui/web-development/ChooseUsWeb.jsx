import chooseUs from "../../../asset/fakedata/webdevelopment/chooseUs";
import MainItemCol from "../../../components/common/MainItemCol";
import ScrollEffect from "../../common/ScrollEffect";

const ChooseUsWeb = () => {
  return (
    <div className="why-choose-us">
      <div className="container">
        <ScrollEffect
          children={
            <>
              <div className="sub-title">Why us</div>
              <div className="title">Why choose us</div>
            </>
          }
        />
        <div className="why-choose-us-list row">
          {chooseUs.map((item, index) => (
            <div key={index} className="item col-sm-12 col-md-6 col-lg-4">
              <MainItemCol data={item} number={`0${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ChooseUsWeb;
