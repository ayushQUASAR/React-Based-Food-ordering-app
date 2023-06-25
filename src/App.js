import React from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import About from './pages/About';
import Pagenf from'./pages/Pagenf';
import './App.css'
import Cart from './pages/Cart'




const App = () => {
 
  return (
    <>
   <Router>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<Pagenf/>}/>
    </Routes>
   </Router>
    </>
  )
}

export default App