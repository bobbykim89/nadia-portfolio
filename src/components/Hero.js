import React from 'react'
import landing from './imgs/LOGO_NAD.svg';

export default function Hero() {

    return (
        <section id="Home">
            <div className="relative bg-black text-white pt-16 pb-16 flex content-center items-end lg:items-center justify-center"
                style={{
                    minHeight: "70vh"
                }}>
                <div className="container relative mx-auto text-center">
                    <div className="w-1/3 inline-block">
                        <img src={ landing } alt="logo-img" />
                    </div>
                    <div className="items-center flex flex-wrap">
                        <div className="mx-auto my-8 text-center">
                            <div>
                                <h1 className="text-white font-bold text-4xl md:text-5xl pb-3 tracking-wider">
                                    NADIA NICOLAS
                                </h1>
                                <p className="text-xl tracking-wider">VFX ARTIST</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
