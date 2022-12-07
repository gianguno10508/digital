import './App.css';
import Header from './components/common/Header';
import './asset/styles/common_styles.css';
import Footer from './components/common/Footer';
import Homepage from './page/Homepage';
import { FastCounter } from "react-smooth-counter";
import Fade from 'react-reveal/Fade';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';
import Firefly from "firefly-react";
function App() {
  const [counterOn, setCounterOn] = useState(false);
  const colors = ["Blue ", "Green", "Red", "Orange"];
  return (
    <div className="App">
      {/* <Header /> */}
      <Homepage />
      <FastCounter
          delay={0}
          startNumber={0}
          to={55555}
          style={{
            color: "grey",
            fontSize: 50,
            fontWeight: "bold",
            width: "100%"
          }}
          className={"randomClass"}
        />
      <Footer />
      <Firefly
        canvasWidth={200}  // you can choose any positive width suitable for your purpose
        canvasHeight={300} // you can choose any positive height suitable for your purpose
        colors={colors}
    />
      <Homepage />
      <Homepage />
      <Homepage />
      <Homepage />
      <Homepage />
      <Homepage />
      <Fade bottom>
          <h1>React Reveal</h1>
        </Fade>
      <Homepage />
      <Homepage />
      <Homepage />
      <div>
        <Fade bottom>
          <h1>React Reveal</h1>
        </Fade>
      </div>
      <Fade bottom>
        <ScrollTrigger onEnter={() => setCounterOn(true)}>
          {counterOn && <FastCounter
            delay={0}
            startNumber={0}
            to={55555}
            style={{
              color: "grey",
              fontSize: 50,
              fontWeight: "bold",
              width: "100%"
            }}
            className={"randomClass"}
          /> }
        </ScrollTrigger>

        </Fade>
        <Homepage />
        <Homepage />
        <Homepage />
    </div>
  );
}

