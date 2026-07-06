import './App.css';
import Header from './pages/Header';
import Home from './pages/home/Home';
// Remove HashRouter from the imports here since it's now handled in index.js
import { Routes, Route } from 'react-router-dom';
import EthiopiaVisa from './pages/home/EthiopiaVisaSection';
import Footer from './pages/home/Footer';

function App() {
  return (
    <div className="App">
      {/* NO MORE EXTRA ROUTER TAG HERE */}
      <Header />

      <Routes>
        <Route path="/visa-service" element={<EthiopiaVisa />} />
        <Route path="*" element={<Home />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
