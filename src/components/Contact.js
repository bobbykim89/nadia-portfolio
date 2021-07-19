import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVimeo, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    return (
        <section className="text-white">
            <div className="relative pt-16 pb-16 flex content-center bg-black md:items-center justify-center" style={{ minHeight: "40vh" }}>
                <div className="relative container flex flex-col md:flex-row justify-center">
                    <div className="mx-auto">
                        <h3 className="font-bold text-5xl tracking-wider text-center mb-6">
                            Contact
                        </h3>
                        <div className="text-center mb-6">
                            <a href="mailto:nadianic.flores@gmail.com" target="_blank" rel="noreferrer" className="text-white inline-block hover:text-yellow-100 mb-4"><p className="text-xl">nadianic.flores@gmail.com</p></a>
                            <p className="text-xl">+52 4424594251</p>
                        </div>
                        <div className="relative flex flex-wrap text-5xl font-bold justify-center">
                            <div>
                                <a href="https://www.linkedin.com/in/nadia-nicolas-flores-089ba695/" target="_blank" rel="noreferrer" className="text-white inline-block hover:text-green-500 mx-4"><FontAwesomeIcon icon={ faLinkedin } /></a>
                            </div>
                            <div>
                                <a href="https://www.instagram.com/whitecatblackiee/?utm_medium=copy_link" target="_blank" rel="noreferrer" className="text-white inline-block hover:text-green-500 mx-4"><FontAwesomeIcon icon={ faInstagram } /></a>
                            </div>
                            <div>
                                <a href="https://vimeo.com/user38033073" target="_blank" rel="noreferrer" className="text-white inline-block hover:text-green-500 mx-4"><FontAwesomeIcon icon={ faVimeo } /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
