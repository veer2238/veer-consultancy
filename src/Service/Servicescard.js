import React from 'react'
import './Service.scss'
import { FaGraduationCap } from "react-icons/fa";

const Servicescard = ({ obj }) => {
    return (
        <div className='servicescard'>
            <div className='s-icon'>
                {obj.icon}
            </div>
            <div className='s-name'>
                <p>{obj.name}</p>
            </div>
        </div>
    )
}

export default Servicescard