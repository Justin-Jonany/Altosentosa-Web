import React from 'react'
import './whychooseus.css'
import karyawan from '../../../Assets/karyawan7.jpg'
import conversation from '../../../Assets/convo.svg'
import award from '../../../Assets/award.svg'
import fastdelivery from '../../../Assets/fastdelivery.svg'
import time from '../../../Assets/clock.svg'
function whychooseus() {
    return (
        <div className="whychooseus">
            <div className="wcu-left">
                <img src={karyawan} alt="" />
            </div>
            <div className="wcu-right">
                <div>
                    <span className="wcu-title">
                        Kenapa Memilih Kami?
                    </span>
                </div>
                <div className="wcu-points">
                    <img src={time} alt="" />
                    <span className="wcu-point-title">
                        Proses Repair yang Cepat
                    </span>
                </div>
                <div className="wcu-points">
                    <img src={award} alt="" />
                    <span className="wcu-point-title">
                        Garansi 2 Bulan
                    </span>
                </div>
                <div className="wcu-points">
                    <img src={conversation} alt="" />
                    <span className="wcu-point-title">
                        Gratis Biaya Konsultasi
                    </span>
                </div>
                <div className="wcu-points">
                    <img src={fastdelivery} alt="" style={{ width: '60px' }}/>
                    <span className="wcu-point-title">
                        Gratis Biaya Antar jemput
                    </span>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default whychooseus