/* eslint-disable no-undef */
import React, { useContext, useEffect } from 'react'
import MyContext from '../../Common/Context/MyContext'
import './Scard.scss'

const Scard = () => {

    const { Navigate, params } = useContext(MyContext)


    return (
        <div className='scard'>
            <p></p>
        </div>
    )
}

export default Scard