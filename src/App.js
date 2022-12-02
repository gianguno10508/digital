import './App.css';
import './asset/styles/common_styles.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import AboutUs from './page/AboutUs';
import Homepage from './page/Homepage';
import MobileAppdevelopment from './page/MobileAppdevelopment';
import UxUiDesignService from './page/UxUiDesignService';
import WebDevelopment from './page/WebDevelopment';
import WhiteLabelSoftware from './page/WhiteLabelSoftware';
function App() {
  return (
    <div className="App">
      <Header />
      {/* <WebDevelopment /> */}
      {/* <Homepage /> */}
      {/* <WhiteLabelSoftware /> */}
      {/* <MobileAppdevelopment /> */}
      {/* <UxUiDesignService /> */}
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
