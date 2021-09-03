import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVimeo,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <section className='text-white' id='Contact'>
      <div
        className='relative pt-16 pb-16 flex content-center bg-black md:items-center justify-center'
        style={{ minHeight: '40vh' }}
      >
        <div className='relative container flex flex-col md:flex-row justify-center'>
          <div className='mx-auto'>
            <h3 className='font-bold text-5xl tracking-wider text-center mb-6'>
              Contact
            </h3>
            <div className='relative flex flex-wrap text-5xl font-bold justify-center'>
              <div>
                <a
                  href='mailto:nadianic.flores@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                  className='text-white inline-block hover:text-green-500 mx-4'
                >
                  <FontAwesomeIcon icon={faEnvelopeSquare} />
                </a>
              </div>
              <div>
                <a
                  href='https://www.linkedin.com/in/nadia-nicolas-flores-089ba695/'
                  target='_blank'
                  rel='noreferrer'
                  className='text-white inline-block hover:text-green-500 mx-4'
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
              <div>
                <a
                  href='https://www.instagram.com/nadthez/'
                  target='_blank'
                  rel='noreferrer'
                  className='text-white inline-block hover:text-green-500 mx-4'
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
              <div>
                <a
                  href='https://vimeo.com/user38033073'
                  target='_blank'
                  rel='noreferrer'
                  className='text-white inline-block hover:text-green-500 mx-4'
                >
                  <FontAwesomeIcon icon={faVimeo} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
