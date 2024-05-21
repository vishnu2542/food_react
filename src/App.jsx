import React from 'react'
// import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LocationPage from './pages/LocationPage'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Restaurant from './pages/Restaurant';
import Signin from './pages/Signin';
import Contact from './components/Contact';
import Res from './pages/Res';
import Rest from './pages/Rest';
import ExploreMenu from './components/ExploreMenu/ExploreMenu';

// import Footer from './components/Footer';

const App = () => {
  return (
    <div className='app'>
      
      <Routes>
        <Route path="/" element={<LocationPage />} />
        <Route path="/restaurant" element={<Restaurant/>} />
        <Route path="/explore-menu" element={<ExploreMenu/>}/>
        <Route path='res' element={<Res/>} />
        <Route path='rest' element={<Rest/>}/>
        <Route path="/signin" element={<Signin/>} />
        <Route path="/contact" element={<Contact/>} />
        
        
        <Route path='/home' element={<Home />} />
        


        
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='*' element={<Navigate to="/" />} />
       
      </Routes>

      {/* <Footer/> */}
    </div>
  )
}

export default App
