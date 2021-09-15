import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVimeo,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <section className='text-white' id='Contact'>
      <div className='flex content-center bg-black md:items-center justify-center min-h-[40vh]'>
        <div className='container flex flex-col md:flex-row justify-center items-stretch'>
          <div className='mx-auto justify-center text-center'>
            <h3 className='font-bold text-5xl tracking-wider text-center mb-2'>
              CONTACT
            </h3>
            <span>
              <a
                href='mailto:nadianic.flores@gmail.com'
                target='_blank'
                rel='noreferrer'
                className='text-white text-xl hover:text-green-500 transition ease-in duration-300'
              >
                nadianic.flores@gmail.com
              </a>
            </span>
            <div className='flex flex-wrap text-5xl font-bold justify-center mt-6'>
              <div>
                <a
                  href='https://www.linkedin.com/in/nadia-nicolas-flores-089ba695/'
                  target='_blank'
                  rel='noreferrer'
                  className='text-white inline-block hover:text-green-500 mx-4 transition ease-in duration-300'
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
              <div>
                <a
                  href='https://www.instagram.com/nadthez/'
                  target='_blank'
                  rel='noreferrer'
                  className='text-white inline-block hover:text-green-500 mx-4 transition ease-in duration-300'
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
              <div>
                <a
                  href='https://vimeo.com/user38033073'
                  target='_blank'
                  rel='noreferrer'
                  className='text-white inline-block hover:text-green-500 mx-4 transition ease-in duration-300'
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
