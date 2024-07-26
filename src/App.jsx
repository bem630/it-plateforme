//import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/pages/order/navbar/Navbar'
import Home from './components/pages/order/main/home/Home.jsx'
import ErrorPage from './components/pages/error/ErrorPage.jsx'
import Footer from './components/pages/order/footer/Footer.jsx'
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="*"  element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
