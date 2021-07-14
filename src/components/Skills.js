import React from 'react';
import { Progress } from 'semantic-ui-react';
import { faPhotoVideo, faCode, faEdit, faGlobeEurope, faGlobeAmericas, faGlobeAsia } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills () {
    AOS.init({
        delay: 500,
        duration: 1800,
        once: false,
        easing: 'ease'
    });

    return (
        <section id="Skills" className="relative py-20 bg-purple-100">
            <div className="mx-auto px-4 w-4/5 md:w-1/3">
                <div>
                    <span className="flex justify-center mb-8">
                        <h2 className="font-semibold text-4xl tracking-widest uppercase text-blue-500">Skills</h2>
                    </span>
                </div>
                <div className="px-4 py-6 mb-4 bg-purple-400 hover:bg-purple-300 hover:border-4 rounded shadow-xl" data-aos='fade-up'>
                    <div className="flex items-center justify-center pb-3">
                        <span className="font-semibold text-3xl inline-block py-3 mr-3 text-indigo-500">
                            <FontAwesomeIcon icon={ faPhotoVideo } />
                        </span>
                        <div>
                            <h4 className="text-3xl leading-relaxed">Autodesk Maya</h4>
                        </div>
                    </div>
                    <div>
                        <Progress percent={ 90 } indicating />
                    </div>
                </div>
                <div className="px-4 py-6 mb-4 bg-purple-400 hover:bg-purple-300 hover:border-4 rounded shadow-xl" data-aos='fade-up'>
                    <div className="flex items-center justify-center pb-3">
                        <span className="font-semibold text-3xl inline-block py-3 mr-3 text-indigo-500">
                            <FontAwesomeIcon icon={ faCode } />
                        </span>
                        <div>
                            <h4 className="text-3xl leading-relaxed">Java</h4>
                        </div>
                    </div>
                    <div>
                        <Progress percent={ 60 } indicating />
                    </div>
                </div>
                <div className="px-4 py-6 mb-4 bg-purple-400 hover:bg-purple-300 hover:border-4 rounded shadow-xl" data-aos='fade-up'>
                    <div className="flex items-center justify-center pb-3">
                        <span className="font-semibold text-3xl inline-block py-3 mr-3 text-indigo-500">
                            <FontAwesomeIcon icon={ faEdit } />
                        </span>
                        <div>
                            <h4 className="text-3xl leading-relaxed">Adobe Creative Cloud</h4>
                        </div>
                    </div>
                    <div>
                        <Progress percent={ 80 } indicating />
                    </div>
                </div>
                <div className="px-4 py-6 mb-4 bg-purple-400 hover:bg-purple-300 hover:border-4 rounded shadow-xl" data-aos='fade-up'>
                    <div className="flex items-center justify-center pb-3">
                        <span className="font-semibold text-3xl inline-block py-3 mr-3 text-indigo-500">
                            <FontAwesomeIcon icon={ faGlobeEurope } />
                        </span>
                        <div>
                            <h4 className="text-3xl leading-relaxed">English</h4>
                        </div>
                    </div>
                    <div>
                        <Progress percent={ 80 } indicating />
                    </div>
                </div>
                <div className="px-4 py-6 mb-4 bg-purple-400 hover:bg-purple-300 hover:border-4 rounded shadow-xl" data-aos='fade-up'>
                    <div className="flex items-center justify-center pb-3">
                        <span className="font-semibold text-3xl inline-block py-3 mr-3 text-indigo-500">
                            <FontAwesomeIcon icon={ faGlobeAmericas } />
                        </span>
                        <div>
                            <h4 className="text-3xl leading-relaxed">Spanish</h4>
                        </div>
                    </div>
                    <div>
                        <Progress percent={ 100 } indicating />
                    </div>
                </div>
                <div className="px-4 py-6 mb-4 bg-purple-400 hover:bg-purple-300 hover:border-4 rounded shadow-xl" data-aos='fade-up'>
                    <div className="flex items-center justify-center pb-3">
                        <span className="font-semibold text-3xl inline-block py-3 mr-3 text-indigo-500">
                            <FontAwesomeIcon icon={ faGlobeAsia } />
                        </span>
                        <div>
                            <h4 className="text-3xl leading-relaxed">Korean</h4>
                        </div>
                    </div>
                    <div>
                        <Progress percent={ 50 } indicating />
                    </div>
                </div>
            </div>
            
        </section>
    )
}