import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import './Enquiryform.css'
import maps from '../../../Assets/maps.svg'
import email from '../../../Assets/email.svg'
import whatsapp from '../../../Assets/whatsapp.svg'

function Enquiryform() {
  const publicKey = "FqKtG6H7oZ7P7tE3J";
  const serviceId = "service_rgjq5ki";
  const templateId = "template_0hlzdmp";

  const enquiryForm = useRef();
  const enquiryButton = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        serviceId,
        templateId,
        e.target,
        publicKey
      )
      .then(
        (result) => {
          enquiryButton.innerText = "Sent!";
          console.log(result.text);

          // clear all the input fields
          enquiryForm.current.reset();

          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Enquiryform">
      <div className="Ef-container">
        <div className="Ef-inputs">
          <div className="Ef-inputs-title">
            <span className="Ef-inputs-title-header">
              Enquiry Form
            </span>
            
            <span className="Ef-inputs-title-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </span>
          </div>
          <br></br>
          <div className="Ef-inputs-form">
            <form id="Enquiry-inputs" ref={enquiryForm} onSubmit={sendEmail}>
              <label for="Enquiry-username">Name</label>
              <input type="text" id='Enquiry-username' name='username' required />
              <label for="Enquiry-username">Email</label>
              <input type="email" id='Enquiry-email' name='email' required />
              <label for="Enquiry-username">Message</label>
              <textarea id='Enquiry-message' name='message' required />
              <button type='submit' ref={enquiryButton} class="submit-btn"> Send </button>
            </form>
          </div>
        </div>
        <div className="Ef-contactinfos">
          <div className="ef-contactinfos-point">
            <span className="ef-contactinfos-title">
              Address
            </span>
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
          <div className="ef-contactinfos-point">
            <span className="ef-contactinfos-title">
              Support
            </span>
            <span className="content-detail">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </span>
          </div>
          <div className="ef-contactinfos-point">
            <span className="ef-contactinfos-title">
              Connect
            </span>
            <div className="contact-button">
              <div><img src={maps} alt="" /></div>
              <div><img src={email} alt="" /></div>
              <div><img src={whatsapp} alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Enquiryform