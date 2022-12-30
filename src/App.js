import React from 'react';
import 'react-toastify/dist/ReactToastify.css'
import { Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import './index.css'


function App() {
  return (
    <div className='app'>
        <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/cart' element={<Cart /> } />
        <Route path='*' element={<NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
