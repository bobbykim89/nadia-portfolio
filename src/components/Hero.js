import React from 'react'
import landing from './imgs/landing.jpg';

export default function Hero() {
    return (
        <div>
            <div className="relative pt-16 pb-16 flex content-center items-end lg:items-center justify-center"
                style={{
                    minHeight: "75vh"
                }}>
                <div className="absolute w-full h-full top-0 bg-fixed bg-top bg-cover" style={{ backgroundImage: `url(${landing})` }}>
                    <span className="w-full h-full absolute opacity-20 bg-yellow-300"></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-5/6 lg:w-6/12 px-4 ml-auto mr-auto text-center p-6 bg-red-100 bg-opacity-75 rounded">
                            <div>
                                <h1 className="text-white font-bold text-4xl lg:text-5xl">
                                    Hi! I'm Nadia, a <span className="text-green-600">VFX</span> Engineer!
                                </h1>
                                <p className="mt-4 text-lg text-red-500 font-semibold ">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, ad dolorum assumenda quam fugiat molestiae vitae magni eos officiis hic ratione dignissimos explicabo quibusdam, minima perferendis. Nobis velit molestias culpa?
                                </p>
                                <a href="#cv" target="_blank" className="bg-transparent hover:bg-green-700 text-green-700 font-bold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded inline-block mt-5">
                                    Here is My Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
