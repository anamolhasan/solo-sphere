import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const Main = () => {
  return (
    <div>
        {/* navbar */}
        <Navbar />

        {/* outlet */}
        <div className='min-h-[calc(100vh-306px)]'>
           <Outlet />
        </div>

        {/* footer */}
    </div>
  )
}

export default Main