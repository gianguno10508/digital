import { useEffect } from 'react';
import './App.css';
import './asset/styles/common_styles.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import HireDevelopers from './page/HireDevelopers';
import Homepage from './page/Homepage';
import MobileAppdevelopment from './page/MobileAppdevelopment';
import WebDevelopment from './page/WebDevelopment';
import WhiteLabelSoftware from './page/WhiteLabelSoftware';
function App() {
  return (
    <div className="App">
      {/* <HireDevelopers /> */}
      {/* <Header /> */}
      <WebDevelopment />
      {/* <Homepage />
      <WhiteLabelSoftware /> */}
      {/* <MobileAppdevelopment />
      <Footer /> */}
    </div>
  );
}

export default App;
