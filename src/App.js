import './App.css';

//Pages
import Home from './pages/Home.js'
import Kirjaus from './pages/Kirjaus.js';
import Tietoa from './pages/PageNotFound';

//Components
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
  <>
      <Navbar />
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Kirjaus" element={<Kirjaus />}/>
        <Route path="*" element={<Tietoa />}/>
    </Routes>
    <Footer />
  </>
    
  );
}

export default App;
