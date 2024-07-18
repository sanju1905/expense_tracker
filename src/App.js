import React from 'react'
import {BrowserRouter as Router,Route,Routes, Link} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'  
import Register from './components/Register'
const App = () => {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
