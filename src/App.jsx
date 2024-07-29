//import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react';
import Navbar from './components/pages/order/navbar/Navbar'
import Home from './components/pages/order/main/home/Home.jsx'
import ErrorPage from './components/pages/error/ErrorPage.jsx'
import Footer from './components/pages/order/footer/Footer.jsx'
import About from './components/pages/order/navigatePages/About.jsx'
import SignUp from './components/pages/order/navigatePages/SignUp.jsx'
import AllFormations from './components/pages/order/main/formation/AllFormations.jsx'
import FormationDetail from './components/pages/order/main/formation/FormationDetail.jsx'
import Formation from './components/pages/order/main/formation/Formation.jsx'
import EvenementDetail from './components/pages/order/main/evenement/EvenementDetail.jsx'
import Evenement from './components/pages/order/main/evenement/Evenement.jsx'
import AllEvenement from './components/pages/order/main/evenement/AllEvenement.jsx'
import DevenirFormateur from './components/pages/order/main/formation/DevenirFormateur.jsx';
import Blogs from './components/pages/order/navigatePages/blog/Blogs.jsx';
import Offres from './components/pages/order/main/offre/Offres.jsx';
import Condition from './utils/Condition.jsx';
import Mention from './utils/Mention.jsx';
import Politique from './utils/Politique.jsx';
import BlogsDetails from './components/pages/order/navigatePages/blog/BlogsDetails.jsx';

function ScrollToTop() {
const { pathname } = useLocation();

useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);

return null;
}

function App() {

  return (
    <>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" exact element={<About/>}/>
        <Route path="/formation" element={<AllFormations/>}/>
        <Route path='/formation/:name' element={<Formation/>} />
        <Route path='/formation/:name/:formationName' element={<FormationDetail/>} />
        <Route path="/evenement" element={<AllEvenement/>} />
        <Route path="/evenement" element={<Evenement/>} />
        <Route path="/evenement/:id" element={<EvenementDetail/>} />
        <Route path='/formateur' element={<DevenirFormateur/>} />
        <Route path='/blog' element={<Blogs/>} />
        <Route path="/blog/:id" element={<BlogsDetails />} />
        <Route path='/offres' element={<Offres/>} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/conditions' element={<Condition/>} />
        <Route path='/mentions' element={<Mention/>} />
        <Route path='/politique' element={<Politique/>} />
        <Route path="*"  element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
