import './App.css';
import Header from '../src/pages/Header';
import Home from './pages/home/Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import EthiopiaVisa from './pages/home/EthiopiaVisaSection';
import Footer from './pages/home/Footer';

function App() {
  return (
    <div className="App">
      {/* 
        CRITICAL REPAIR: 
        The HashRouter MUST be the very first wrapper element. 
        Moving the <Header /> inside ensures it can read the <Link> component safely!
      */}
      <HashRouter>
        <Header />

        <Routes>
          {/* 1. Sub-page component view */}
          <Route path="/visa-service" element={<EthiopiaVisa />} />

          {/* 2. Fallback homepage landing layout view */}
          <Route path="*" element={<Home />} />
        </Routes>
        
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
