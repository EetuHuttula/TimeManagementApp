import './App.css';

//Pages
import Home from './pages/Home.js'
import TimeManagement from './pages/TimeManagement';
import NotFound from './pages/PageNotFound';
import UserManagement from './Usermg.js'
import Login from './pages/Login.js';
//Components
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
  <>
      <Navbar />
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}/>
        <Route path="/TimeManagement" element={<TimeManagement />}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="/Admin" element={<UserManagement />}/>
    </Routes>
    <Footer />
  </>

    
  );
}

export default App;
