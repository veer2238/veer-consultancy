import React from 'react'
import Header from './Common/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Search from './Common/Search/Search'
import MyContextProvider from './Common/Context/MyContextProvider'
import ContactBatch from './Common/ContactBatch/ContactBatch'
import Contact from './Contact/Contact'
import Login from './Common/Login/Login'
import Register from './Common/Register/Register'
import Loader from './Common/Loader/Loader'
import Error from './Common/Error/Error'
import Footer from './Footer/Footer'
import PassportVerify from './Passportcomp/PassportVerify'
import Scard from './Home/Service-card/Scard'
import ScrollToTop from "react-scroll-to-top";
import { FaCircleArrowUp } from "react-icons/fa6";
import SubHeader from './SubHeader/SubHeader'
import GoToTop from './Common/Gototop/GoToTop'

const App = () => {
  return (

    <BrowserRouter>
      <MyContextProvider>
        <SubHeader />
        <Header />
        <Login />
        <Loader />
        <Error />
        <Register />
        <ContactBatch />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/passport' element={<PassportVerify />} />
          <Route path='/:sname' element={<Scard />} />
        </Routes>
        <ScrollToTop smooth component={<FaCircleArrowUp size={40} color="#ff0000" />} />
        <GoToTop />
        <Footer />
      </MyContextProvider>
    </BrowserRouter>


  )
}

export default App