
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
import Rajasthan from './component/citynews/Rajasthan';
import Gujarat from './component/citynews/Gujarat';
import Delhi from './component/citynews/Delhi';
import Uttrakhand from './component/citynews/Uttrakhand';
import Bihar from './component/citynews/Bihar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Mainnav></Mainnav>
        <Headernav/>

        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/Country' element={<Country></Country>} />
          <Route path='/Gameeducation' element={<Gameeducation></Gameeducation>} />
          <Route path='/Business' element={<Business></Business>} />
          <Route path='/Monthlymagazine' element={<Monthlymagazine></Monthlymagazine>} />
          <Route path='/Rajasthan' element={<Rajasthan/>} />
          <Route path='/Gujarat' element={<Gujarat/>} />
          <Route path='/Delhi' element={<Delhi/>}/>
          <Route path='/Uttrakhand' element={<Uttrakhand/>}/>
          <Route path='/Bihar' element={<Bihar/>}/>
          


        </Routes>


        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
