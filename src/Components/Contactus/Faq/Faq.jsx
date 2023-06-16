import './Faq.css'
import emailjs from '@emailjs/browser'
import React, { useRef } from 'react';

function Faq() {
    const publicKey = "FqKtG6H7oZ7P7tE3J";
    const serviceId = "service_rgjq5ki";
    const templateId = "template_0hlzdmp";

    const qnaForm = useRef();
    const qnaButton = useRef();
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
                    qnaButton.innerText = "Sent!";
                    console.log(result.text);

                    // clear all the input fields
                    qnaForm.current.reset();

                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="Faq">
            <div className="faq-container">
                <div className="faq-title">
                    Frequently Asked Question
                </div>
                <div className="question-form">
                    <div className="question-form-container">
                        <div className="form-title">
                            Ask a Different Question
                        </div>
                        <form id="qna-inputs" ref={qnaForm} onSubmit={sendEmail}>
                            <label for="qna-username">Name</label>
                            <input type="text" id='qna-username' name='username' required />
                            <label for="qna-username">Email</label>
                            <input type="email" id='qna-email' name='email' required />
                            <label for="qna-username">Message</label>
                            <textarea id='qna-message' name='message' required />
                            <button type='submit' ref={qnaButton} class="submit-btn"> Send </button>
                        </form>
                    </div>

                </div>
                <div className="qna-container">
                    <details>
                        <summary>
                            Barang apa yang dapat kami repair?
                        </summary>
                        <div className='qna-answer'>
                            Semuanya, mulai dari Inverter, servo drive, Hmi, PCB, sampai dengan UPS. Jika ada
                            jenis barang yang tidak ada di list kami, bisa coba contact sales kami karena kemungkinan besar kami dapat repair.
                        </div>
                    </details>
                    <details>
                        <summary>
                            Saya tertarik untuk servis barang, apa Langkah berikutnya?
                        </summary>
                        <div className='qna-answer'>
                            Hubungi kami melalui telepon, email, atau mengisi form repair. Unit bisa segera diantar ke workshop.
                        </div>
                    </details>
                    <details>
                        <summary>
                            Berapa biaya repair nya?
                        </summary>
                        <div className='qna-answer'>
                            Biaya akan tergantung kerusakan pada barang. Untuk itu kami perlu melakukan pengecekan terlebih dahulu.
                        </div>
                    </details>
                    <details>
                        <summary>
                            Berapa lama untuk garansi nya?
                        </summary>
                        <div className='qna-answer'>
                            Garansi 1 bulan untuk kerusakan yang sama terhitung dari tanggal barang Selesai repair diantar. Tidak menerima apabila kerusakan lain dari yang sebelumnya.
                        </div>
                    </details>
                    <details>
                        <summary>
                            Apakah barang kami bisa diambil langsung dari pabrik?
                        </summary>
                        <div className='qna-answer'>
                            Kami memberikan gratis antar jemput untuk wilayah Jabodetabek.
                        </div>
                    </details>
                </div>
            </div>
        </div>
    )
}

export default Faq