import React, { useContext, useEffect } from 'react'
import './Card.scss'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa6";
import MyContext from '../../Common/Context/MyContext';

const Card = ({ obj }) => {
    const { Navigate } = useContext(MyContext)


    return (

        <>
            <div className='service-card' onClick={() => Navigate(`/${obj.name}`)}>
                <span className='one'><FaAddressCard /></span>
                <span className='head'>{obj.title}</span>
                <span className='two'>
                    {obj.desc}
                </span>
                <div className='icon'>{obj.icon}</div>
                <div className='line'></div>
            </div>

        </>
    )
}

export default Card