import React from 'react'
import logofooter from '../../Assets/logo-footer.png'
import './Footer.css'
import maps from '../../Assets/maps.svg'
import email from '../../Assets/email.svg'
import whatsapp from '../../Assets/whatsapp.svg'
import home from '../../Assets/home.svg'
import clock from '../../Assets/clock.svg'
import phone from '../../Assets/phone.svg'
function Footer() {
    return (
        <div className="footer">
            <div className="footer-elements">
                {/* left */}
                <div className="Logo-footer">
                    <img src={logofooter} alt="" className="logo-footer" />
                    <div className="contact-button">
                        <div><img src={maps} alt="" /></div>
                        <div><img src={email} alt="" /></div>
                        <div><img src={whatsapp} alt="" /></div>
                    </div>
                </div>

                {/* middle */}
                <div className="contact-footer">
                    <div className="grid-contact">
                        <div className="symbol">
                            <img src={home} alt="" />
                        </div>
                        <div className="symbol">
                        </div>
                        <div className="content-special">
                            <span className='content-text'>
                                Head Office:
                            </span>
                            <span className='content-detail'>
                                Jalur Sutera Timur Kav 7A No. 3 - Alam Sutera, Serpong, Tangerang
                            </span>
                            <span className='content-text'>
                                Workshop:
                            </span>
                            <span className='content-detail'>
                                Jalan Sutera Timur Kav 6B No.26, Alam Sutera
                            </span>

                        </div>
                        <div className="symbol">
                            <img src={email} alt="" />
                        </div>
                        <div className="content">
                            <span className='content-text'>
                                sales@alt-sentosa.com
                            </span>
                        </div>
                        <div className="symbol">
                            <img src={phone} alt="" />
                        </div>
                        <div className="content">
                            <span className='content-text'>
                                (021) - 5010 1875
                            </span>
                        </div>
                        <div className="symbol">
                            <img src={clock} alt="" />
                        </div>
                        <div className="content">
                            <span className='content-text'>
                                Senin-Jumat: 08.00 - 17.00
                            </span>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className="navigations-footer">
                    <div className="nav-grid-container">
                        <span className='quick-nav-title'>Quick Navigation</span>
                        <span className="quick-link">Home</span>
                        <span className="quick-link">Repair Form</span>
                        <span className="quick-link">Services</span>
                        <span className="quick-link">Why Us</span>
                        <span className="quick-link">Blog</span>
                        <span className="quick-link">About Us</span>
                    </div>

                </div>

            </div>
            <hr />
            <span className='copyright'>2023 All rights reserved. PT. Alto Sentosa</span>
        </div >

    )
}

export default Footer