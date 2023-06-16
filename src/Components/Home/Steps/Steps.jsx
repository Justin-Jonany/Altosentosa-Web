import React from 'react'
import './Steps.css'

function Steps() {
    return (
        <div className="steps">
            <div className="steps-container">
                <span className="title-text-steps">
                    Langkah
                </span>
                <div className="step-3">
                    <div className="step-2">
                        <div className="step-1">
                            <span className="step-text">
                                <span className="step-num"> 1 </span>
                                <span className="step-title">
                                    Dapatkan Quotation
                                </span>
                                <br />
                                <span className="step-content">
                                    Isi form repair kami atau segera hubungi sales kami melalui (021) 5010 1875
                                </span>
                            </span>
                        </div>
                        <span className="step-text">
                            <span className="step-num"> 2 </span>
                            <span className="step-title">
                                Kirim Barang
                            </span>
                            <br />
                            <span className="step-content" id='step-content-2'>
                                Bebas biaya antar jemput
                            </span>
                        </span>
                    </div>
                    <span className="step-text">
                        <span className="step-num"> 3 </span>
                        <span className="step-title">
                            Masalah Selesai
                        </span>
                        <br />
                        <span className="step-content" id='step-content-2'>
                            Cepat, murah, dan 2 bulan garansi
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Steps