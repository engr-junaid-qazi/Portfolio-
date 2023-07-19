import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
    return (
        <div>

                <footer className="text-black-600 body-font">
                   
                    <div className="pt-2 pb-2 pl-0 bg-blue-300 container px-5 
                    py-5 mx-auto flex flex-wrap items-center md:flex-row 
                    sm:flex-row flex-col">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

                            <span className="ml-3 text-black-800 text-xl font-bold">Engr. Junaid Qazi</span>
                        </a>
                        <p className="font-bold text-sm text-black-800 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                            © 2023-2025 Engr. Junaid Qazi
                        </p>

                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a title='Facebook'
                                href='https://web.facebook.com/profile.php?id=100011665863653'
                                target='_blank' className="hover:text-red-600 hover:text-xl 
                        text-lg text-black-800 cursor-pointer">
                                <BsFacebook />
                            </a>

                            <a title='Linkedin' href='https://www.linkedin.com/in/engrjunaidqazi/' target='_blank' className="hover:text-red-600 hover:text-xl text-lg ml-3 text-black-800 cursor-pointer">
                                <FaLinkedinIn />
                            </a>

                            <a title='Github' href='https://github.com/engr-junaid-qazi' target='_blank' className="hover:text-red-600 hover:text-xl text-lg ml-3 text-black-500 cursor-pointer">

                                <BsGithub />
                            </a>
                        </span>
                    </div>
                </footer>


            </div>
            )
}
            export default Footer