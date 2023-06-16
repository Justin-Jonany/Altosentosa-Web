import './Intro.css'
import React, { useState } from 'react'
import Slide1 from '../../../Assets/slide-1.png'
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import employees1 from '../../../Assets/karyawan5.jpg';
import employees2 from '../../../Assets/karyawan6.jpg';
function Intro() {
    return (
        <div className="intro">
            <ImageSlider slides={SliderData}> </ImageSlider>

            {/* content */}
            <div className="intro-container">
                <div className="image1-intro">
                    <img src={employees1} alt="" />
                </div>
                <div className="image2-intro">
                    <img src={employees2} alt="" />

                </div>
                <div className="text-intro">
                    <span className="title-intro">
                        Mitra Terpercaya dalam Servis Elektronik Industri

                    </span>
                    <br />
                    <p className="content-intro">
                        Menservis mesin dapat membantu anda menghemat sampai dengan 90% harga mesin baru.
                        <br />
                        Kami memahami bahwa setiap menit downtime dapat memiliki dampak signifikan pada produktivitas dan profitabilitas bisnis Anda. Oleh karena itu, PT Alto Sentosa memberikan prioritas pada kecepatan dan harga yang terjangkau dalam melakukan perbaikan mesin.
                        <br />
                        Kami memberikan jasa repair segala macam elektronik industri mulai dari Inverter, HMI, PCB, Servo Drive, sampai UPS dengan gratis biaya konsultasi dan bebas biaya antar jemput barang. Selain repair, kami juga melakukan bisnis lain seperti jasa pemrograman PLC, preventive maintenance sampai dengan perakitan control board.

                    </p>
                </div>
            </div>
            <div className="repair-form">
                <div className='call-to-action'>
                    Get a FREE Evaluation!
                </div>

                <div className='repair-form-square'>
                    <span className="repair-form-intro">
                        Repair Form

                    </span>
                </div>


            </div>
        </div>


    )
}

export default Intro