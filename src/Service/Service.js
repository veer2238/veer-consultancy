import React from 'react'
import './Service.scss'
import { FaGraduationCap } from "react-icons/fa";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { ImAirplane } from "react-icons/im";
import { FaPassport } from "react-icons/fa";
import Servicescard from './Servicescard';

const Service = () => {

    const services = [
        {
            id: 1,
            name: "Student Visa",
            icon: <FaGraduationCap />
        },
        {
            id: 2,
            name: "Work Permit",
            icon: <FaPersonWalkingLuggage />
        },
        {
            id: 3,
            name: "Immigration",
            icon: <FaEarthAmericas />
        },
        {
            id: 4,
            name: "Visitor Visa",
            icon: <FaArrowRightArrowLeft />
        },
        {
            id: 5,
            name: "Air Ticket",
            icon: <ImAirplane />
        },
        {
            id: 6,
            name: "Passport",
            icon: <FaPassport />
        },
    ]

    return (
        <div className='services'>
            <div className='services-content'>
                <span>
                    Services
                </span>
                <div className='service-container'>
                    {services.map((obj) => {
                        return (<Servicescard obj={obj} />)
                    })}
                </div>

            </div>
        </div>
    )
}

export default Service