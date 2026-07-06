import './App.css';
import Header from '../src/pages/Header';
import Home from './pages/home/Home'
// CHANGED: Imported HashRouter here to solve GitHub Pages 404 errors completely
import { HashRouter, Routes, Route } from 'react-router-dom'
import EthiopiaVisa from './pages/home/EthiopiaVisaSection'
import Footer from './pages/home/Footer';

function App() {
  return (
    <div className="App">
      {/* 
        CRITICAL FIX: Wrapped the entire app layout structure in a HashRouter.
        This changes URLs to 'somalische-dolmetscher.de/#/visa-service'.
        GitHub Pages will never throw a 404 page error again using this!
      */}
      <HashRouter>
        <Header />

        <Routes>
          {/* 1. Specific sub-page component route */}
          <Route path="/visa-service" element={<EthiopiaVisa />} />

          {/* 2. Fallback landing homepage component view */}
          <Route path="*" element={<Home />} />
        </Routes>
        
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
