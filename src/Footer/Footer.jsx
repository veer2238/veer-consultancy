import React, { useContext } from 'react'
import './Footer.scss'
// import { MdOutlineMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import MyContext from '../Common/Context/MyContext';

const Footer = () => {

    const { Navigate } = useContext(MyContext)

    return (
        <>
            <footer>

                <div className='footer-part'>
                    <div className='f-content'>

                        <div className='fheading'>About</div>
                        <span className='f-line'></span>
                        <div className='f-item'>
                            <div className='logo'>Veer Consultancy</div>
                        </div>
                        <div className='f-item'>
                            <span>We provide best service for you</span>
                        </div>
                        <div className='f-item'>
                            <div className='btn' onClick={() => Navigate('/contact')}>
                                <div><FaPhone size={'12px'} /></div>
                                <span>Contact Us</span>
                            </div>
                        </div>
                    </div>
                    <div className='f-content'>
                        <div className='fheading'>Study Abroad</div>
                        <span className='f-line'></span>
                        <div className='f-item'>
                            <span>Study in Canada</span>
                        </div>
                        <div className='f-item'>
                            <span>Study in United Kingdom</span>
                        </div>
                        <div className='f-item'>
                            <span>Study in USA</span>
                        </div>
                        <div className='f-item'>
                            <span>Study in Australia</span>
                        </div>
                        <div className='f-item'>
                            <span>Study in New Zealand</span>
                        </div>
                        <div className='f-item'>
                            <span>Study in France</span>
                        </div>
                        <div className='f-item'>
                            <span>Study in Germany</span>
                        </div>
                        <div className='f-item'>
                            <span>Study in Europe</span>
                        </div>
                    </div>
                    <div className='f-content'>
                        <div className='fheading'>Visitor Visa</div>
                        <span className='f-line'></span>
                        <div className='f-item'>
                            <span>Visitor Visa in USA</span>
                        </div>
                        <div className='f-item'>
                            <span>Visitor Visa in Canada</span>
                        </div>
                        <div className='f-item'>
                            <span>Visitor Visa in UK</span>
                        </div>

                        <div className='f-item'>
                            <span>Visitor Visa in Australia</span>
                        </div>
                        <div className='f-item'>
                            <span>Visitor Visa in Germany</span>
                        </div>
                        <div className='f-item'>
                            <span>Visitor Visa in France</span>
                        </div>

                        <div className='f-item'>
                            <span>Visitor Visa in Europe</span>
                        </div>
                        <div className='f-item'>
                            <span>Visitor Visa in New Zealand</span>
                        </div>
                    </div>
                    <div className='f-content'>
                        <div className='fheading'>Stay tuned</div>
                        <span className='f-line'></span>

                        <div className='f-item'>
                            <span>Subscribe to our newsletter and never miss our news</span>
                        </div>
                        <div className='f-item'>
                            <div className='newsletter'>
                                <input type='text' placeholder='Your Email' />
                                <div className='arrow'>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                                </div>
                            </div>
                        </div>
                        <div className='f-item'>
                            <span>©Immigration. All Rights Reserved 2024. Licensing</span>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer