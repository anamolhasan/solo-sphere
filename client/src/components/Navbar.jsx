import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthContext'
import { Link } from 'react-router'
import logo from '../assets/images/logo.png'

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
  return (
    <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
  <div className="flex-1">
    <Link to={'/'} className='flex gap-2 items-center'>
        <img className='w-auto h-7' src={logo} alt="solo sphere logo" />
        <span className='font-bold'>SoloSphere</span>
    </Link>
  </div>
  <div className="flex-none">
       <ul className='menu menu-horizontal px-1'>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/jobs'}>All Jobs</Link>
            </li>
            {!user && (
                <li>
                <Link to={'/login'}>Login</Link>
            </li>
            )}
       </ul>
    {user && (
         <div className="dropdown dropdown-end">
      <div 
      tabIndex={0} 
      role="button" 
      className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            referrerPolicy='no-referrer'
            alt="User Profile Photo"
            src={user?.photoURL} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to={'/add-job'} className='justify-between'>Add Job</Link>
        </li>
        <li>
          <Link to={'/my-posted-jobs'} className='justify-between'>My Posted Jobs</Link>
        </li>
        <li>
          <Link to={'/my-bids'} className='justify-between'>My Bids</Link>
        </li>
        <li>
          <Link to={'/bid-requests'} className='justify-between'>Bid Requests</Link>
        </li>
        <li className='mt-2'>
          <button onClick={logOut} className='bg-gray-200 block text-center'>Logout</button>
        </li>
      </ul>
    </div>
    )}
  </div>
</div>
  )
}

export default Navbar