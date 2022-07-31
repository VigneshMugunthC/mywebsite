import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Register from './pages/Register';
import Products from './pages/Products';
import Cart from './pages/Cart';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/mywebsite' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
