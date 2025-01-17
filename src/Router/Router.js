import React from 'react'
import{Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Homepage from '../Pages/Home/Homepage'
import Header from '../Layout/Header/Header'
import { Drawer } from '@mui/material'
const Routing = () => {
  return (
    <div>
      <Router>
       <Header/>
        <Routes>
            <Route path="" element={<Homepage/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default Routing
