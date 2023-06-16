import React from 'react'
import './Help.css'
import gear from '../../../Assets/gear.svg'
import box from '../../../Assets/box.svg'
import find from '../../../Assets/find.svg'
import glove from '../../../Assets/glove.svg'
import wrench from '../../../Assets/wrench.svg'
function Help() {
    return (
        <div className="Help">
            <div className="left-Help">
                <span className='title-help-text'>
                    Bagaimana kami bisa membantu?
                </span>
                <hr className='hr-help' />
                <div className="contact-us-help">
                    <span className='contact-us-text'>
                        Contact Us
                    </span>
                </div>
            </div>
            <div className="right-Help">
                <div className="grid-container-help">
                    <div className="reason1">
                        <div className="title-help">
                            <img src={wrench} alt="" />
                            <span className="title-text-help">
                                Alto Repair Services
                            </span>
                        </div>
                        <span className="detail-help">
                            Mulai dari Inverter, HMI, PCB, Servo Drive, sampai dengan UPS, kami memberikan jasa repair tercepat dengan harga terbaik.
                        </span>
                        <div className="link-help">
                            <span className="link-name-help">
                                Katalog Repair
                            </span>
                        </div>
                    </div>
                    <div className="reason2">
                        <div className="title-help">
                            <img src={box} alt="" />
                            <span className="title-text-help">
                                Produk
                            </span>
                        </div>
                        <span className="detail-help">
                            Kami adalah agen resmi Inverter Nidec dan menjual 200+ barang baru lainnya.
                        </span>
                        <div className="link-help">
                            <span className="link-name-help">
                                Katalog Produk
                            </span>
                        </div>
                    </div>
                    <div className="reason3">
                        <div className="title-help">
                            <img src={gear} alt="" />
                            <span className="title-text-help">
                                Preventive maintenance
                            </span>
                        </div>
                        <span className="detail-help">
                            Seperti kata orang, mencegah lebih baik daripada mengobati. Pencet tombol dibawah untuk mempelajari lebih lanjut jasa Preventive Maintenance kami.
                        </span>
                        <div className="link-help">
                            <span className="link-name-help">
                                Preventive Maintenance
                            </span>
                        </div>
                    </div>
                    <div className="reason4">
                        <div className="title-help">
                            <img src={find} alt="" />
                            <span className="title-text-help">
                                Proyek Lainnya
                            </span>
                        </div>
                        <span className="detail-help">
                            Mulai dari pemrograman PLC & HMI sampai dengan perangkaian control board.
                        </span>
                        <div className="link-help">
                            <span className="link-name-help">
                                Proyek Kami
                            </span>
                        </div>
                    </div>
                    <div className="reason5">
                        <div className="title-help">
                            <img src={glove} alt="" />
                            <span className="title-text-help">
                            Konsultasi Gratis                            </span>
                        </div>
                        <span className="detail-help">
                            Kirim barang anda ke kami untuk konsultasi gratis dan bebas biaya antar jemput
                        </span>
                        <div className="link-help">
                            <span className="link-name-help">
                                Kirim Barang Anda
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Help