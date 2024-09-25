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
const App = () => {
  return (

    <BrowserRouter>
      <MyContextProvider>

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
        <Footer />
      </MyContextProvider>
    </BrowserRouter>


  )
}

export default App