import { useState } from "react";

//img, title, description, sub-des, logo,left true
const LeftRightCol = ({ data }) => {
  const [left, setLeft] = useState(0);
  data.isLeft ? setLeft(0) : setLeft(2);
  return (
    <div className="item-inner row">
      <div className="image-feature col-sm-12 col-md-5" style={"order: left"}>
        <div className="image">
          <img src={data.img} alt="" className="banner-image" />
        </div>
      </div>
      <div className="content-right col-sm-12 col-md-7">
        {data.type_title == "h1" ? (
          <h1>{data.title}</h1>
        ) : data.type_title == "h2" ? (
          <h2>{data.title}</h2>
        ) : (
          <p>{data.title}</p>
        )}
        <div className="description">
          <p>{data.description}</p>
        </div>
        {data.sub_description && <h5>{data.sub_description}</h5>}
        {data.logos && (
          <div className="logos">
            {data.logos.map((item, index) => (
              <div className="image-logo">
                <div className="image">
                  <img src={item.img} alt="" className="banner-image" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
