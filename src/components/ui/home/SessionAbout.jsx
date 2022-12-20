// round, title, description, subtitle
import ScrollAnimation from "react-animate-on-scroll";
import ScrollEffect from "../../common/ScrollEffect";
const SessionAbout = ({ data }) => {
  return (
    <>
      <div className="sub-heading">
        <span>
          <ScrollEffect
            children={<div className="line-split">{data.subHeading}</div>}
          />
        </span>
      </div>
      {data.title && <ScrollEffect children={<h2>{data.title}</h2>} />}
      <div className="description">
        <ScrollEffect children={<p>{data.description}</p>} />
      </div>
      {data.subContentSecond && (
        <ScrollEffect
          children={
            <p className="sub-content-second">{data.subContentSecond}</p>
          }
        />
      )}
    </>
  );
};
export default SessionAbout;
