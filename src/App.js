import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import HeroSection from './Components/HeroSection';
import AboutUs from './Pages/AboutUs';
import WWD from './Components/WWD';

function App() {
  return (
    <div style={{width:'100%', backgroundColor:'black',display:'flex', flexDirection:'column', alignItems:'center'}}>
      <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', width:'100%'}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hs' element={<HeroSection />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/wwd' element={<WWD />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;


