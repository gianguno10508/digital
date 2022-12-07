import React from "react";
import ScrollEffect from "../../common/ScrollEffect";

function BottomPanel() {
  return (
    <div className="container">
      <div className="border-bottom-banner">
        <ScrollEffect
          children={<h2>Need Expert Help with a Mobile App Project?</h2>}
        />
        <div className="description">
          Create user-centered mobile apps with a combination of technological
          creativity and innovation.
        </div>
        <div className="button-more">
          <a href="#">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default BottomPanel;
