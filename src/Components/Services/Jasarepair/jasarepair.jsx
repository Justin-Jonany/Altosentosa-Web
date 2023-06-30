import React from 'react'
import './jasarepair.css'
import Whychooseus from './whychooseus'
import { itemData } from './itemData.js';

function jasarepair() {
  return (
    <div className="jasarepair">
      <div className="jr-intro">
        <div>
          <span className="title-jr">
            Jasa Repair
          </span>
        </div>
        <div className='title-info-jr-container'>
          <span className="title-info-jr">
            Dengan pengalaman lebih dari 10 tahun di bidang ini, tim teknisi kami siap menyediakan layanan perbaikan tercepat dan terbaik kepada mitra kami dengan harga yang paling kompetitif. Baca lebih lanjut untuk mengetahui apa saja yang dapat kami perbaiki untuk Anda.
          </span>
        </div>
      </div>
      <Whychooseus />

      <div className="repair-form-container">
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


      <div className="barang-kami-repair">
            <div className="bkr-big-title">
                Barang yang Kami Repair
            </div>
            <div className="bkr-content-container">
                {itemData.map((item, index) => {
                    return (
                        <div className="bkr-container">
                            <img src={item.image} alt="" className='bkr-image' />
                            <span className="bkr-title">
                                {item.title}
                            </span>
                            <span className="bkr-content">
                                {item.content}
                            </span>
                            <form action={item.link}>
                                <button type="submit" className='bkr-read-more'>Read More</button>
                            </form>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default jasarepair