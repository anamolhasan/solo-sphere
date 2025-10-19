import React from 'react'
import { Link } from 'react-router'

const Slide = ({image, text}) => {
  return (


    <div class="w-full bg-center bg-cover h-[38rem]" style={{backgroundImage: `url(${image})`}}>
        <div class="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div class="text-center">
                <h1 class="text-3xl font-semibold text-white lg:text-4xl w-2/3 mx-auto">{text}</h1>
                <br />
                <Link  to='/add-job'
            className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>Post Job & Hire Expert</Link>
            </div>
        </div>
    </div>

   

  )
}

export default Slide