import React from "react";
import { useState } from "react";
import { ScrollTrigger } from "react-gsap";
import { Fade } from "react-reveal";
// import { itemOurVision, itemsFact } from '../../../asset/fakedata/aboutus/itemsAboutus';
import MainItemCol from "../../common/MainItemCol";
import MainItemCol1 from "../../common/MainItemCol1";
import ScrollEffect from "../../common/ScrollEffect";

function FactsFigures({ figures }) {
  const [counterOn, setCounterOn]  = useState(false);
  return (
    <div className="facts_figures-content">
      <div className="facts_figures-title">
        <ScrollEffect children={<h2>Facts & Figures </h2>} />
      </div>
      <div className="facts_figures-list">
        <div className="wapper">
          {figures.map((item, index) => (
            <div className="facts_figures-item" key={index}>
              <Fade bottom>
                <ScrollTrigger onEnter={() => setCounterOn(true)}>
                  {counterOn && (
                    <MainItemCol1 data={item} />
                  )}
                </ScrollTrigger>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FactsFigures;
