import React, { useContext, useEffect } from 'react'
import MyContext from '../Context/MyContext'
import './Error.scss'

const Error = () => {

    const { sneck, msg, setSneck } = useContext(MyContext)

    useEffect(() => {
        if (sneck) {
            setTimeout(() => {
                setSneck(false)
            }, 3000);
        }
    })
    return (
        <>
            {sneck &&
                <div className='alert' style={{ backgroundColor: msg.match('Thanks') || msg.match('Pass') ? '#28a745' : '#dc3545' }}>{msg}</div>
            }
        </>

    )
}

export default Error