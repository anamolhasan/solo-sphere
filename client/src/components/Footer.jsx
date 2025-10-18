import React from 'react'
import logo from '../assets/images/logo.png'
import { FaFacebookF, FaGithub, FaRedditAlien } from "react-icons/fa";
import { Link } from 'react-router';

const Footer = () => {

    const date = new Date().getFullYear()
    
  return (
    <footer className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
            <Link to={'/'}>
                <img className="w-auto h-7" src={logo} alt="logo" />
            </Link>

            <div className="flex flex-wrap justify-center mt-6 -mx-4">
                <Link to={'/'} className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Home </Link>
                
                <Link to={'/about'}  className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> About </Link>
                
                <Link to={'/teams'} className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Teams </Link>

                <Link to={'/privacy'} className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Privacy </Link>

                <Link to={'/cookies'} className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Cookies </Link>
            </div>

        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-300">© Copyright {date}. All Rights Reserved.</p>
            <h2 className=' font-bold font-roboto text-green-500'>Develop by Anamol Hasan</h2>
            <div className="flex -mx-2">
                <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                    <FaRedditAlien className='text-xl'/>
                </a>

                <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                    <FaFacebookF className='text-xl'/>
                </a>

                <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                    <FaGithub className='text-xl'/>
                </a>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer