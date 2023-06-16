import React from 'react'
import './Contactusintro.css'
import location from '../../../Assets/maps.svg'
import telephone from '../../../Assets/phone.svg'
import email from '../../../Assets/email.svg'
function Contactusintro() {
  return (
    <div className="Contactintro">
      <div className="contactus-container">
        <div className="contact-title">
          <span>Quick Support.</span>
        </div>
        <div className="contactus-detail-container">
          <img src={location} alt="" />
          <span className="contactus-detail-title">
            Location
          </span>
          <span className="contactus-content">
            <span style={{ fontWeight: 'bold' }}>
              Head Office:
            </span>
            <br />
            <span>
              Jalur Sutera Timur Kav 7A No. 3 - Alam Sutera, Serpong, Tangerang
            </span>
            <br />
            <br />
            <span style={{ fontWeight: 'bold' }}>
              Workshop:
            </span>
            <br />
            <span>
              Jalan Sutera Timur Kav 6B No.26, Alam Sutera
            </span>
          </span>
        </div>
        <div className="contactus-detail-container">
          <img src={email} alt="" />
          <span className="contactus-detail-title">
            Email
          </span>
          <span className='contactus-content' >
            <a href="mailto:example@gmail.com" className='contactus-email-text'>
              sales@alto-sentosa.com
            </a>
          </span>

        </div>
        <div className="contactus-detail-container">
          <img src={telephone} alt="" />
          <span className="contactus-detail-title">
            Telephone
          </span>
          <span className="contactus-content">
            <span style={{ fontWeight: 'bold' }}>
              Customer Service:
            </span>
            <br />
            <span>
              +62 8151-9422-156
            </span>
            <br />
            <br />
            <span style={{ fontWeight: 'bold' }}>
              General Inquiries:
            </span>
            <br />
            <span>
              (021) 5010-1875
            </span>
            <br />
            <br />
            <span style={{ fontWeight: 'bold' }}>
              Emergency Repair:
            </span>
            <br />

            <span>
              +62 8161-9474-89
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Contactusintro