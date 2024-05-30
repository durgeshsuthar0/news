
import './App.css';
import Mainnav from './component/Nav';
import Headernav from './component/Headernav';
import Home from './component/Home';
import Footer from './component/Footer';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Country from './component/Country';
import Citystate from './component/City_state';
import Gameeducation from './component/Game_education';
import Business from './component/Business';
import Monthlymagazine from './component/Monthly_magazine';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Mainnav></Mainnav>
        <Headernav></Headernav>
        
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/Country' element={<Country></Country>} />
          <Route path='/Citystate' element={<Citystate></Citystate>} />
          <Route path='/Gameeducation' element={<Gameeducation></Gameeducation>} />
          <Route path='/Business' element={<Business></Business>} />
          <Route path='/Monthlymagazine' element={<Monthlymagazine></Monthlymagazine>} />
        </Routes>


        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
