import React from 'react'
import ReactPlayer from 'react-player';
import AOS from 'aos';
import 'aos/dist/aos.css';
import wow from './imgs/digiwork/wow.png';
import disney from './imgs/digiwork/disney.png';
import puss from './imgs/digiwork/puss-in-boots.jpg';

export default function Demo() {
    AOS.init({
        delay: 500,
        duration: 1800,
        once: false,
        easing: 'ease'
    });

    return (
        <section id="Demo" className="relative py-20 bg-black text-white text-lg">
            <div className="container w-11/12 md:w-3/5 mx-auto items-center">
                <div>
                    <span className="flex justify-start mb-8">
                        <h2 className="font-semibold text-4xl tracking-widest uppercase">Digital work</h2>
                    </span>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="inline-block flex w-full md:w-1/4 mb-8" data-aos="fade-up">
                        <img src={ wow } alt="" />
                    </div>
                    <div className="inline-block flex w-full md:w-1/4 mb-8" data-aos="fade-up">
                        <img src={ disney } alt="" />
                    </div>
                    <div className="inline-block flex w-full md:w-1/4 mb-8" data-aos="fade-up">
                        <img src={ puss } alt="" />
                    </div>
                </div>
                <div className="mt-12">
                    <span className="flex justify-start mb-8">
                        <h2 className="font-semibold text-4xl tracking-widest uppercase">Demo Reels</h2>
                    </span>
                </div>
                <div className="flex flex-wrap mx-auto justify-center">
                    <div className="flex w-full block md:w-5/6 items-center md:mb-6" data-aos="fade-right">
                        <ReactPlayer
                            controls
                            url="https://vimeo.com/574944862"
                            width="100%"
                        />
                    </div>
                    <div className="flex w-full block md:w-5/6 items-center justify-center" data-aos="fade-right">
                        <ReactPlayer
                            controls
                            url="https://vimeo.com/574950647"
                            width="100%"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
