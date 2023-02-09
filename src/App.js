import './App.css';
import Home from './pages/Home.js'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="container">

    <Routes>
        <Route path="/" element={<Home />}/>
    </Routes>

    </div>
  );
}

export default App;
