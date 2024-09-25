import React, { useState } from 'react'
import MyContext from './MyContext'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const MyContextProvider = ({ children }) => {
  const Navigate = useNavigate()

  const params = useParams();

  const location = useLocation()

  const [isOpen, setIsOpen] = useState(false)

  const [ropen, setRopen] = useState(false)

  const [loading, setLoading] = useState(false)

  const [sneck, setSneck] = useState(false)
  const [msg, setMsg] = useState('');

  return (
    <MyContext.Provider value={{ sneck, setSneck, ropen, msg, setMsg, loading, setLoading, setRopen, isOpen, setIsOpen, Navigate, location, params }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider