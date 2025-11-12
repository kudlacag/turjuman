
import './App.css';
import Header from '../src/pages/Header';
import Home from './pages/home/Home'
import {Routes, Route} from 'react-router-dom'
import Services from './pages/links/Services';

import Footer from './pages/home/Footer';
// import Contacts from './pages/links/Contacts';

function App() {
  return (
    <div className="App">
    <Header />

   <Routes>

    <Route path='*' element={<Home /> } />


    <Route path='/services' element={ <Services />} />
  

   </Routes>
   <Footer />
    </div>
  );
}

export default App;
