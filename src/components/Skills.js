import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import maya from './imgs/software/maya.png';
import ae from './imgs/software/after-effect.png';
import ai from './imgs/software/illustrator.png';
import pr from './imgs/software/premiere.png';
import ps from './imgs/software/photoshop.png';
import sp from './imgs/software/sp.png';
import nuke from './imgs/software/nuke.png';
import zbush from './imgs/software/zbrush.png';

export default function Skills () {
    AOS.init({
        delay: 500,
        duration: 1800,
        once: false,
        easing: 'ease'
    });

    return (
        <section id="Skills" className="relative py-20 text-black bg-white border-black border-8 md:border-20">
            <div className="mx-auto px-4 w-4/5 md:w-3/5">
                <div>
                    <span className="flex justify-start mb-8">
                        <h2 className="font-semibold text-4xl tracking-widest uppercase">Software</h2>
                    </span>
                </div>
                <div className="flex flex-wrap justify-center item-center" data-aos="zoom-in">
                    <div className="inline-block w-auto mx-4 my-4">
                        <img src={ maya } alt="" className="max-h-20" />
                    </div>
                    <div className="inline-block w-auto mx-4 my-4">
                        <img src={ ae } alt="" className="max-h-20" />
                    </div>
                    <div className="inline-block w-auto mx-4 my-4">
                        <img src={ ai } alt="" className="max-h-20" />
                    </div>
                    <div className="inline-block w-auto mx-4 my-4">
                        <img src={ pr } alt="" className="max-h-20" />
                    </div>
                    <div className="inline-block w-auto mx-4 my-4">
                        <img src={ ps } alt="" className="max-h-20" />
                    </div>
                </div>
                <div className="flex flex-wrap justify-center item-center" data-aos="zoom-in">
                    <div className="inline-block w-auto mx-4 my-4">
                        <img src={ sp } alt="" className="max-h-24 md:max-h-20" />
                    </div>
                    <div className="inline-block w-auto mx-4 my-4">
                        <img src={ nuke } alt="" className="max-h-20" />
                    </div>
                    <div className="inline-block w-auto mx-4 my-4">
                        <img src={ zbush } alt="" className="max-h-20" />
                    </div>
                </div>
            </div>
            
        </section>
    )
}