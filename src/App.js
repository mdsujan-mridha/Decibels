import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Headers/Header';
import Footer from './Components/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/AllPages/Home/Home';

function App() {
  return (
    <div>
     <Header></Header>  
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
     </Routes>
         
     <Footer></Footer>
    </div>
  );
}

export default App;
