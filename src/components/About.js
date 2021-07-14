import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons';
import profile from './imgs/profileimg.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
    AOS.init({
        delay: 500,
        duration: 1800,
        once: false,
        easing: 'ease'
    });

    return (
        <section id="About" className="relative py-20 bg-gray-800 text-white">
            <div className="container mx-auto px-4">
                <div className="inline-block items-center flex flex-wrap">
                    <div data-aos='fade-right'>
                        <div className="w-full md:w-1/2 mx-auto mb-8">
                            <img src={ `${ profile }` } alt="Profile" className="max-w-lg rounded-lg shadow-lg" />
                        </div>
                    </div>
                    <div className="relative w-full md:w-5/12 mx-2 md:mx-auto" data-aos='fade-left'>
                        <div className="md:pr-4">
                            <div  className="items-center">
                                <span className="flex justify-center">
                                    <h2 className="font-semibold text-4xl tracking-widest uppercase text-yellow-500">About Me</h2>
                                </span>
                                <p className="text-justify mt-4 text-lg">As a VFX engineer my core values are professionalism, perfection and attention on detail. I have great problem skills always leading me to make my product better than last one. Continuous improvement and fast paced development are my specialty</p>
                            </div>
                            <ul className="list-none mt-6">
                                <li className="hover:bg-white hover:bg-opacity-10 p-4">
                                    <div className="flex items-center justify-center">
                                        <span className="font-semibold text-3xl inline-block py-3 mr-3 text-yellow-500">
                                            <FontAwesomeIcon icon={ faCanadianMapleLeaf } />
                                        </span>
                                        <div>
                                            <h4 className="text-2xl">
                                                Langara College
                                            </h4>
                                        </div>
                                    </div>
                                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit eum dolorum reprehenderit amet praesentium, molestias accusantium rem ipsa nihil quo, quod, ullam fugiat ea ducimus! Repellat fuga vero unde!</p>
                                </li>
                                <li className="hover:bg-white hover:bg-opacity-10 p-4">
                                    <div className="flex items-center justify-center">
                                        <span className="font-semibold text-3xl inline-block py-3 mr-3 text-yellow-500">
                                            <FontAwesomeIcon icon={ faBriefcase } />
                                        </span>
                                        <div>
                                            <h4 className="text-2xl">
                                                Content Manager at Madfox
                                            </h4>
                                        </div>
                                    </div>
                                    <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam ipsam laudantium, mollitia iusto placeat nemo rerum totam explicabo illum architecto ab tenetur earum optio necessitatibus vel. Facilis pariatur sapiente atque.</p>
                                </li>
                                <li className="hover:bg-white hover:bg-opacity-10 p-4">
                                    <div className="flex items-center justify-center">
                                        <span className="font-semibold text-3xl inline-block py-3 mr-3 text-yellow-500">
                                            <FontAwesomeIcon icon={ faUniversity } />
                                        </span>
                                        <div>
                                            <h4 className="text-2xl">
                                                Tecnológico de Monterrey
                                            </h4>
                                        </div>
                                    </div>
                                    <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis sunt quam dolor ut quasi reprehenderit rerum incidunt sed aspernatur earum ab minima cumque tenetur repellat dolorum, nemo, amet necessitatibus vel?</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
