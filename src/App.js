import { useEffect } from 'react';
import './App.css';
import './asset/styles/common_styles.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import AboutUs from './page/AboutUs';
import Contact from './page/Contact';
import Detail from './page/Detail';
import HireDevelopers from './page/HireDevelopers';
import Homepage from './page/Homepage';
import MobileAppdevelopment from './page/MobileAppdevelopment';
import OurSolution from './page/OurSolution';
import UxUiDesignService from './page/UxUiDesignService';
import WebDevelopment from './page/WebDevelopment';
import WhiteLabelSoftware from './page/WhiteLabelSoftware';
function App() {
  return (
    <div className="App">
      <Header />
      {/* <HireDevelopers /> */}
      {/* <WebDevelopment /> */}
      {/* <Homepage /> */}
      {/* <WhiteLabelSoftware /> */}
      {/* <MobileAppdevelopment /> */}
      {/* <AboutUs /> */}
      <UxUiDesignService />
      {/* <OurSolution /> */}
      {/* <Contact /> */}
      {/* <Detail /> */}
      <Footer />
    </div>
  );
}

export default App;
