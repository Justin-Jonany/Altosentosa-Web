import React from 'react'
import introImage from '../../../Assets/karyawan5.jpg'
import './Projek.css'
import Enquiryform from './Enquiryform'
import PastProject from './PastProject'
// import PastProjects from './PastProjects'

function Projek() {
  return (
    <div className="Projek">
      <div className="projek-intro-container">
        <img src={introImage} alt="" />
        <div className="projek-intro-content">
          Kami juga menyediakan berbagai <em>project based service</em> sesuai dengan kebutuhan perusahan anda. Berbagai contoh proyek yang kami lakukan termasuk pemrograman PLC, pemrograman HMI, dan Perangkaian Control board.
          Baca lebih lanjut untuk melihat proyek yang sudah kami lakukan.
          <br />
          <br />
          Baca lebih lanjut untuk melihat proyek yang sudah kami lakukan.
        </div>
      </div>
      <PastProject />
      {/* <PastProjects /> */}
      <Enquiryform/>

    </div>
  )
}

export default Projek