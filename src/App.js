import './App.css';

//Pages
import Home from './pages/Home.js'
import Arkisto from './pages/Arkisto.js';
import Kirjaus from './pages/Kirjaus.js';
import Tietoa from './pages/Tietoa.js';

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
        <Route path="/Arkisto" element={<Arkisto />}/>
        <Route path="/Tietoa" element={<Tietoa />}/>
    </Routes>
    <Footer />
  </>
    
  );
}

export default App;
