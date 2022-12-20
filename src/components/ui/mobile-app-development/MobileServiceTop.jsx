import React from "react";
// import { itemService } from "../../../asset/fakedata/mobileapp/itemService";
import MainItemCol from "../../common/MainItemCol";
import MainItemCol1 from "../../common/MainItemCol1";
import ScrollEffect from "../../common/ScrollEffect";

function MobileServiceTop({ data }) {
  return (
    <div className="mobile-service-top row">
      <div className="service-top-col-meta">
        <div className="vcenter-item">
          <ScrollEffect children={<h2>Native Mobile App Development </h2>} />
        </div>
      </div>

      <div className="service-top-col-items">
        {data.map((item, index) => (
          <div className="inner-service" key={index}>
            <MainItemCol1 data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MobileServiceTop;
