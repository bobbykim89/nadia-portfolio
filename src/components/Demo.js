import React from 'react'
import ReactPlayer from 'react-player';
import { faVimeoV } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Demo() {
    AOS.init({
        delay: 500,
        duration: 1800,
        once: false,
        easing: 'ease'
    });

    return (
        <section id="Demo" className="relative py-20 bg-gray-800 text-white text-lg">
            <div className="container mx-auto items-center">
                <div>
                    <span className="flex justify-center mb-8">
                        <h2 className="font-semibold text-4xl tracking-widest uppercase text-yellow-500">My Demo</h2>
                    </span>
                </div>
                <div className="flex flex-wrap mx-auto">
                    <div className="flex w-full md:w-7/12 items-center justify-center py-6" data-aos="fade-right">
                        <ReactPlayer
                            vimeo
                            controls
                            url="https://vimeo.com/574944862"
                            width="100%"
                        />
                    </div>
                    <div className="flex w-5/6 md:w-1/3 mx-auto md:ml-6 flex-col items-center justify-center" data-aos="fade-up">
                        <h4 className="text-3xl mb-6 tracking-wider">
                            Compositing Reel
                        </h4>
                        <hr className="w-5/6 border-1 mb-6" />
                        <p className="text-justify">
                            Thank you for watching. Copyright © Nadia Nicolas Flores
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap mx-auto">
                    <div className="flex w-full md:w-7/12 items-center justify-center py-6" data-aos="fade-right">
                        <ReactPlayer
                            vimeo
                            controls
                            url="https://vimeo.com/574950647"
                            width="100%"
                        />
                    </div>
                    <div className="flex w-5/6 md:w-1/3 mx-auto md:ml-6 flex-col items-center justify-center" data-aos="fade-up">
                        <h4 className="text-3xl mb-6 tracking-wider">
                            Animation Reel
                        </h4>
                        <hr className="w-5/6 border-1 mb-6" />
                        <p className="text-justify">
                            Thank you for watching. Copyright © Nadia Nicolas Flores
                        </p>
                        <a href="https://vimeo.com/user38033073" target="_blank" rel="noreferrer" className="bg-transparent hover:bg-yellow-500 text-yellow-500 font-bold hover:text-white py-2 px-4 border-2 border-yellow-500 hover:border-transparent rounded inline-block mt-5">
                            <FontAwesomeIcon className="mr-2" icon={ faVimeoV } />My Vimeo Profile
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
