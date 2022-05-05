import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Headers/Header';
import Footer from './Components/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/AllPages/Home/Home';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register/Register';
import Products from './Components/Products/Products';


function App() {
  return (
    <div>
     <Header></Header>  
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/products' element={<Products></Products>}></Route>

        </Routes>
         
     <Footer></Footer>
    </div>
  );
}

export default App;
