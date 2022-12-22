import { Markup } from "interweave";
import { useState } from "react";

//img, title, description, sub-des, logo,left true
const LeftRightCol = ({ data }) => {
  //   const [left, setLeft] = useState(0);
  //   data.isLeft ? setLeft(0) : setLeft(2);
  let order_id = 0;
  if (data.location == 'Left') {
    order_id = 2;
  }
  return (
    <div className="item-inner row">
      <div className={`image-feature col-sm-12 col-md-${data.columnLeft}`} style={{ order: order_id }} >
        <div className="image">
          <img src={data.image.sourceUrl} alt="" className="banner-image" />
        </div>
        {data.caption && (
          <div className="caption">
            {data.caption}
          </div>
        )}
      </div>
      <div className={`content-right col-sm-12 col-md-${12 - data.columnLeft}`}>
        <div className="title"><Markup content={data.title} /></div>
        <div className="description">
          <Markup content={data.description} />
        </div>
        {data.techTitleTitle && <h5>{data.techTitleTitle}</h5>}
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