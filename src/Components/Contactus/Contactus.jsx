import React from 'react'
import ContactusIntro from './intro/Contactusintro'
import Faq from './Faq/Faq'
function Contactus() {
  return (
    <div className="Contactus">
      <ContactusIntro />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d506.20257886140365!2d106.66010281756718!3d-6.226692152480529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb11753d2bdd%3A0x2a36c7a27d823e43!2sAlto%20Sentosa.%20PT!5e0!3m2!1sen!2sca!4v1686195791265!5m2!1sen!2sca" width="1200" height="700" style={{ border: 0 , padding: '100px 0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      <Faq />
    </div>
  )
}

export default Contactus