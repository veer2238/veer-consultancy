import React, { useContext, useEffect } from 'react'
import MyContext from '../Context/MyContext'
import './Error.scss'
import { MdErrorOutline } from "react-icons/md";

const Error = () => {

    const { sneck, msg, setSneck } = useContext(MyContext)

    useEffect(() => {
        if (sneck) {
            setTimeout(() => {
                setSneck(false)
            }, 300000);
        }
    })
    return (
        <>
            {sneck &&
                <div className='alert' style={{ color: msg.match('Thanks') ? 'black' : 'red' }}>{msg}</div>
                // <div className='alert'>{msg}</div>

            }
        </>

    )
}

export default Error