import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faHome } from '@fortawesome/free-solid-svg-icons';
import landing from './imgs/landing.jpg';

export default function Contact() {
    return (
        <section className="text-white">
            <div className="relative pt-16 pb-16 flex content-center md:items-center justify-center" style={{ minHeight: "40vh" }}>
                <div className="absolute w-full h-full top-0 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${landing})` }}>
                    <span className="w-full h-full absolute opacity-40 bg-black" />
                </div>
                <div className="relative container flex flex-col md:flex-row justify-between">
                    <div className="w-5/6 md:w-1/3 mx-auto">
                        <h3 className="font-bold text-5xl ml-2 tracking-wider">
                            Contact
                        </h3>
                        <hr className="border-4 border-yellow-500 my-4" />
                        <div className="relative flex flex-wrap text-5xl font-bold justify-start ml-2">
                            <div>
                                <a href="https://www.linkedin.com/in/nadia-nicolas-flores-089ba695/" target="_blank" rel="noreferrer" className="text-white inline-block hover:text-green-500 mr-4"><FontAwesomeIcon icon={ faLinkedin } /></a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/nadia-nicolas-flores-089ba695/" target="_blank" rel="noreferrer" className="text-white inline-block hover:text-green-500 mr-4"><FontAwesomeIcon icon={ faGithubSquare } /></a>
                            </div>
                            <div>
                                <a href="mailto:nadianic.flores@gmail.com" target="_blank" rel="noreferrer" className="text-white inline-block hover:text-green-500 mr-4"><FontAwesomeIcon icon={ faEnvelopeSquare } /></a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col w-5/6 md:w-1/3 mx-auto text-right md:pt-32">
                        <div className="mb-3">
                            <h4 className="font-bold text-4xl tracking-wider">Vancouver, BC <FontAwesomeIcon clasName="ml=4"icon={ faHome } /></h4>
                        </div>
                        <p className="font-bold text-2xl">Let's Keep in touch!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
