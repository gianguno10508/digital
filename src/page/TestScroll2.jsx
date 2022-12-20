// import { useLayoutEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../asset/styles/testthu.css";
// import Page from "./Page";

// gsap.registerPlugin(ScrollTrigger);

// function useArrayRef() {
//   const refs = useRef([]);
//   refs.current = [];
//   return [refs, (ref) => ref && refs.current.push(ref)];
// }

// const ScrollContainer = () => {
//   const [panelData, setPanelData] = useState(() => [
//     { id: 0 },
//     { id: 1 },
//     { id: 2 }
//   ]);
//   const panelsContainer = useRef();
//   const [panels, setPanelsRef] = useArrayRef();

//   useLayoutEffect(() => {
//     const totalPanels = panels.current.length;

//     gsap.to(panels.current, {
//       xPercent: -100 * (totalPanels - 1),
//       ease: "none",
//       scrollTrigger: {
//         trigger: panelsContainer.current,
//         pin: true,
//         scrub: 1,
//         snap: 1 / (totalPanels - 1),
//         end: () => "+=" + panelsContainer.current.offsetWidth
//       }
//     });
//   }, []);

//   return (
//     <div className="containr" ref={panelsContainer}>
//       {panelData.map((panel, index) => (
//         <Page
//           key={panel.id}
//           ref={setPanelsRef} // Not sure if this is right...
//           value={panel}
//           className="panel"
//           text="Some text"
//         />
//       ))}
//     </div>
//   );
// };

// export default ScrollContainer;

import React, { useState } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import ContentOurSolution from "../asset/fakedata/oursolution/contentOursolution";
import LeftRightCol from "../components/common/LeftRightCol";
import $ from "jquery";

const SlideContainer = () => {
  const [state] = useState({
    sections: [
      { id: 1, imgSrc: "https://placehold.it/1920x1080" },
      { id: 2, imgSrc: "https://placehold.it/1920x1080" },
      { id: 3, imgSrc: "https://placehold.it/1920x1080" },
      { id: 4, imgSrc: "https://placehold.it/1920x1080" },
    ],
  });

  const tweenPercentage = 100 - 100 / ContentOurSolution.length;
  return (
    <Controller>
      <Scene triggerHook="onLeave" duration={"500%"} pin>
        {(progress) => (
          <div className="pin-container" style={styles.pinContainer}>
            <Timeline
              totalProgress={progress}
              paused
              target={
                <div
                  className="slide-container"
                  style={{
                    ...styles.slideContainer,
                    width: ContentOurSolution.length + "00%",
                  }}
                >
                  {ContentOurSolution.map((section) => (
                    <div
                      className="panel"
                      key={section.id}
                      style={styles.panel}
                    >
                      <LeftRightCol data={section} />
                    </div>
                  ))}
                </div>
              }
            >
              <Tween to={{ x: "-" + 500000 + "%" }}></Tween>
            </Timeline>
          </div>
        )}
      </Scene>
    </Controller>
  );
};

const styles = {
  normalSection: {
    background: "#282c34",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pinContainer: {
    height: "100vh",
    width: "100%",
    overflow: "hidden",
  },
  slideContainer: {
    height: "100%",
    display: "flex",
  },
  panel: {
    flex: 1,
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default SlideContainer;
