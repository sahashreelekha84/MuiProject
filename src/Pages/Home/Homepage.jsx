import React from 'react'
import Carousalslide from '../../Component/Carousal/Carousalslide'
import Product from '../Product/Product'
import About from './About/About'
import Footer from '../../Layout/Footer/Footer'
import Contact from '../Contact/Contact'
import Drawer from '../../Component/Drawer/Drawer'


const Homepage = () => {
  return (
    <div>
     
  <Carousalslide/>
  <Product/>
  <About/>
  <Contact/>
  <Footer/>
    </div>
  )
}

export default Homepage
