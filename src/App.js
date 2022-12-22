import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './asset/styles/common_styles.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import AboutUs from './page/AboutUs';
import Blog from './page/Blog';
import Career from './page/Career';
import CaseStudies from './page/CaseStudies';
import Contact from './page/Contact';
import Detail from './page/Detail';
import HireDevelopers from './page/HireDevelopers';
import Homepage from './page/Homepage';
import ListContentCategory from './page/ListContentCategory';
import MobileAppdevelopment from './page/MobileAppdevelopment';
import OurSolution from './page/OurSolution';
import UxUiDesignService from './page/UxUiDesignService';
import WebDevelopment from './page/WebDevelopment';
import WhiteLabelSoftware from './page/WhiteLabelSoftware';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/web-development' element={<WebDevelopment />} />
        <Route path='/white-label-software-service' element={<WhiteLabelSoftware />} />
        <Route path='/ux-ui-design-service' element={<UxUiDesignService />} />
        <Route path='/mobile-app-development' element={<MobileAppdevelopment />} />
        <Route path='/hire-developers' element={<HireDevelopers />} />
        <Route path='/our-solution' element={<OurSolution />} />
        <Route path='/case-studies' element={<CaseStudies />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/:title' element={<Detail />} />
        <Route path='/category/:category' element={<ListContentCategory />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/career' element={<Career />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
