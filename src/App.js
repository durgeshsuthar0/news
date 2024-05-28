
import './App.css';
import Mainnav from './component/Nav';
import Headernav from './component/Headernav';
import Home from './component/home';
import Footer from './component/footer';

function App() {
  return (
    <div>
      <Mainnav></Mainnav>
      <Headernav></Headernav>
      <Home></Home>
      <Footer/>
    </div>
  );
}

export default App;
