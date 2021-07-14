import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare, faCat } from '@fortawesome/free-solid-svg-icons'
import Hamburger from 'hamburger-react';

export default function Navbar () {
    const [navBarOpen, setNavbarOpen] = useState (false);
    return (
        <nav id="Contact" className="w-screen top-0 absolute md:sticky flex flex-wrap items-center bg-gray-800 z-50">
            <div className="container flex flex-wrap items-center py-4 justify-between">
                <div className="flex flex-shrink-0 mr-6">
                    <a href="#Home">
                        <span className="text-yellow-400 text-2xl font-bold pl-6">
                            <FontAwesomeIcon icon={ faCat } /> Nadia Nicolas Flores
                        </span>
                    </a>
                </div>
                <div class="block lg:hidden">
                    <button className="flex items-center px-3 py-4 mr-6 text-xl font-bold text-yellow-400 hover:text-white" type="button" onClick={() => setNavbarOpen (!navBarOpen)}>
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
                    <div className="flex flex-row pt-3 lg:pt-1 lg:flex-grow justify-center lg:justify-start">
                        <a href="#About" className="block lg:inline-block text-yellow-200 text-lg hover:text-yellow-100 mr-4">
                            About
                        </a>
                        <span className="inline-block lg:hidden pt-1 text-yellow-200 text-sm pr-4">
                            |
                        </span>
                        <a href="#Skills" className="block lg:inline-block text-yellow-200 text-lg hover:text-yellow-100 mr-4">
                            Skills
                        </a>
                        <span className="inline-block lg:hidden pt-1 text-yellow-200 text-sm pr-4">
                            |
                        </span>
                        <a href="#Demo" className="block lg:inline-block text-yellow-200 text-lg hover:text-yellow-100 mr-4">
                            My Demo
                        </a>
                        <span className="inline-block lg:hidden pt-1 text-yellow-200 text-sm pr-4">
                            |
                        </span>
                        <a href="#Contact" className="block lg:inline-block text-yellow-200 text-lg hover:text-yellow-100 mr-4">
                            Contact
                        </a>
                    </div>
                    <div className="flex flex-wrap pt-3 lg:pt-1 justify-center">
                        <a href="linkedin.com" target="_blank" className="inline-block text-red-400 text-xl mx-2 hover:text-white">
                            <FontAwesomeIcon icon={ faLinkedin } />
                        </a>
                        <a href="github.com" target="_blank" className="inline-block text-red-400 text-xl mx-2 hover:text-white">
                            <FontAwesomeIcon icon={ faGithubSquare } />
                        </a>
                        <a href="gmail.com" target="_blank" className="inline-block text-red-400 text-xl mx-2 hover:text-white">
                            <FontAwesomeIcon icon={ faEnvelopeSquare } />
                        </a>
                    </div>
                </div>
                
            </div>
        </nav>
    );
}
