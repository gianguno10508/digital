import { Markup } from "interweave";
import { useState } from "react";

//img, title, description, sub-des, logo,left true
const LeftRightCol = ({ data }) => {
//   const [left, setLeft] = useState(0);
//   data.isLeft ? setLeft(0) : setLeft(2);
  return (
    <div className="item-inner row">
      <div className={`image-feature col-sm-12 col-md-${data.piece_col_left}`} style={{order: data.order}} >
        <div className="image">
          <img src={data.img} alt="" className="banner-image"/>
        </div>
        {data.caption && (
          <div className="caption">
            {data.caption}
          </div>
        )}
      </div>
      <div className={`content-right col-sm-12 col-md-${data.piece_col_right}`}>
        {data.type_title == "h1" ? (
          <h1>{data.title}</h1>
        ) : data.type_title == "h2" ? (
          <h2>{data.title}</h2>
        ) : (
          <p>{data.title}</p>
        )}
        <div className="description">
            <Markup content={data.description} />
        </div>
        {data.sub_description && <h5>{data.sub_description}</h5>}
        {data.logos && (
          <div className="logos">
            {data.logos.map((item, index) => (
              <div key={index} className="image-logo">
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

export default LeftRightCol;