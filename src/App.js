
import './App.css';
import Header from '../src/pages/Header';
import Home from './pages/home/Home'
import {Routes, Route} from 'react-router-dom'
// import Services from './pages/links/Services';
import EthiopiaVisa from './pages/home/EthiopiaVisaSection'
import Footer from './pages/home/Footer';
// import Contacts from './pages/links/Contacts';

function App() {
  return (
    <div className="App">
    <Header />

   <Routes>
        {/* 1. Put specific sub-pages FIRST so React can read them */}
        <Route path="/visa-service" element={<EthiopiaVisa />} />

        {/* 2. Put your fallback / landing page at the bottom of the list */}
        <Route path="*" element={<Home />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
