import React from 'react'
import "./SubHeader.scss"
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
const SubHeader = () => {
    return (
        <div className='sub-header'>
            <div className='sh'>
                <div className='sub-header-content'>
                    <div className='left'>
                        <FaLocationDot className='icon' />
                        <span>202,Kunal Complex Nizampura,vadodara-390002</span>
                    </div>

                    <div className='right'>
                        <FaPhone className='icon' />
                        <span>+91 9316051170</span>
                        <span className='icon'>|</span>
                        <IoIosMail className='icon' size={"20px"} />
                        <span>abroadvisa2220@gmail.com</span>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default SubHeader