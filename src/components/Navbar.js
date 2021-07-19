import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Hamburger from 'hamburger-react';

export default function Navbar () {
    const [navBarOpen, setNavbarOpen] = useState (false);

    return (
        <nav id="Contact" className="w-screen top-0 absolute sticky items-center bg-black z-50">
            <div className="container items-center mx-auto md:py-4 justify-between">
                <div className="block flex justify-between md:hidden" >
                    <div className="flex inline-block items-center ml-6">
                        <a href="#Home" className="text-white text-2xl hover:text-yellow-200"><FontAwesomeIcon icon={ faHome } /></a>
                    </div>
                    <button className="flex items-center px-3 py-4 text-xl font-bold text-white hover:text-yellow-100" type="button" onClick={() => setNavbarOpen (!navBarOpen)}>
                        <Hamburger size={ 23 } toggled={ navBarOpen } toggle={ setNavbarOpen } />
                    </button>
                </div>
                <div 
                    className={
                        "flex-grow w-full lg:flex lg:w-auto flex-wrap items-center"
                        +
                        (navBarOpen ? "block" : " hidden")
                    }
                >
                    <div className="flex pt-3 pb-4 md:pb-0 md:pt-1 md:flex-grow text-center justify-center">
                        <a href="#Home" className="hidden md:block md:inline-block md:mx-auto text-white text-md md:text-xl hover:text-yellow-100 mr-4">
                            <FontAwesomeIcon icon={ faHome } />
                        </a>
                        <a href="#About" className="block md:inline-block md:mx-auto text-white text-md md:text-xl hover:text-yellow-100 mr-4">
                            ABOUT
                        </a>
                        <span className="inline-block md:hidden pt-1 text-white text-sm pr-4">
                            |
                        </span>
                        <a href="#Skills" className="block md:inline-block md:mx-auto text-white text-md md:text-xl hover:text-yellow-100 mr-4">
                            SOFTWARE
                        </a>
                        <span className="inline-block md:hidden pt-1 text-white text-sm pr-4">
                            |
                        </span>
                        <a href="#Demo" className="block md:inline-block md:mx-auto text-white text-md md:text-xl hover:text-yellow-100 mr-4">
                            WORKS
                        </a>
                        <span className="inline-block md:hidden pt-1 text-white text-sm pr-4">
                            |
                        </span>
                        <a href="#Contact" className="block md:inline-block md:mx-auto text-white text-md md:text-xl hover:text-yellow-100 mr-4">
                            CONTACT
                        </a>
                    </div>
                </div>
                
            </div>
        </nav>
    );
}
