import './App.css';
import Header from './components/common/Header';
import './asset/styles/common_styles.css';
import Footer from './components/common/Footer';
import Homepage from './page/Homepage';

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
