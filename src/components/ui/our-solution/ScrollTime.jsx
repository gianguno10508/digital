import React from "react";
// import styled from 'styled-components';
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import '../../../asset/styles/our_solution.css';


const ScrollTimeOurSolution = () => (
  <div className="section">
    <Controller>
      <div>
        <Scene triggerHook="onLeave" duration={10000} pin>
          {(progress) => (
            <div className="sticky">
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ x: "10%", top: "60%" }}
                  to={{ x: "60%", top: "10%" }}
                >
                </Tween>
                <Timeline
                  target={
                    <div className="heading">
                      <h2>This is a cool heading</h2>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool headingsadsdf</h3>
                    </div>
                  }
                >
                  <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                  <Tween to={{ x: "110%" }} />
                </Timeline>
                <Timeline
                  target={
                    <div className="heading">
                      <h2>This is aasfsdfgdgdf</h2>
                      <h3>This idfgdfhfgading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This idfgdfding</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool headingsadsdf</h3>
                    </div>
                  }
                >
                  <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                  <Tween to={{ x: "110%" }} />
                </Timeline>
              </Timeline>
            </div>
          )}
        </Scene>
        <Scene triggerHook="onLeave" duration={10000} pin>
          {(progress) => (
            <div className="sticky">
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ x: "10%", top: "60%" }}
                  to={{ x: "60%", top: "10%" }}
                >
                </Tween>
                <Timeline
                  target={
                    <div className="heading">
                      <h2>This is a cool heading</h2>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool headingsadsdf</h3>
                    </div>
                  }
                >
                  <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                  <Tween to={{ x: "110%" }} />
                </Timeline>
                <Timeline
                  target={
                    <div className="heading">
                      <h2>This is aasfsdfgdgdf</h2>
                      <h3>This idfgdfhfgading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This idfgdfding</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool heading</h3>
                      <h3>This is a cool headingsadsdf</h3>
                    </div>
                  }
                >
                  <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                  <Tween to={{ x: "110%" }} />
                </Timeline>
              </Timeline>
            </div>
          )}
        </Scene>
      </div>
    </Controller>
  </div>
);

export default ScrollTimeOurSolution;
