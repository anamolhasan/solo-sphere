import React, { useContext } from 'react'
import { FcGoogle } from 'react-icons/fc'
import bgImg from "../../assets/images/register.jpg";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthContext';
import toast from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate()
  const { signInWithGoogle, createUser, updateUserProfile, setUser } =
    useContext(AuthContext)

    const handleSignUp = async e => {
      e.preventDefault()
      const form = e.target 
      const email = form.email.value 
      const name = form.name.value
      const photo = form.photo.value 
      const pass = form.password.value
      console.log(email, name, photo, pass)

      try {
        // User Registration
        const result = await createUser(email, pass)
        console.log(result)
        await updateUserProfile(name, photo)
        setUser({...result.user, PhotoURL: photo, displayName: name})
        toast.success("Signup Successful")
        navigate('/')
      } catch (error) {
        console.log(error)
        toast.error(error?.message)
      }



    }

      // Google Signin
    const handleGoogleSignIn = async() => {
        try {
            await signInWithGoogle()
            toast.success('Signin Successful')
            navigate('/')
        } catch (error) {
            console.log(error)
            toast.error(error?.message)
        }
    }


  return (
     <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl my-10">
      <div
        className="hidden bg-cover bg-center lg:block lg:w-1/2"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div className="flex justify-center mx-auto">
          <img
            className="w-auto h-7 sm:h-8"
            src={logo}
            alt=""
          />
        </div>

        <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
          Welcome back!
        </p>

        {/* google login */}
        <div
          onClick={handleGoogleSignIn}
          className="cursor-pointer flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <div className="pl-4 py-2">
            <FcGoogle className="text-2xl"/>
          </div>

          <span className="w-5/6 px-4 py-3 font-bold text-center">
            Sign in with Google
          </span>
        </div>

        {/* ------------- */}
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

          <p
            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or Register with email
          </p>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>
      {/* email and password with register */}
       <form  onSubmit={handleSignUp}>
        {/* name */}
          <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            htmlFor="name"
          >
            Username
          </label>
          <input
            id="name"
            placeholder='anamol hasan'
            autoComplete='name'
            name='name'
            type="text"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        {/* photo */}
          <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            htmlFor="photo"
          >
            Photo URL
          </label>
          <input
            id="photo"
            placeholder='enter your photo url'
            name='photo'
            type="text"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        {/* email */}
          <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            htmlFor="LoggingEmailAddress"
          >
            Email Address
          </label>
          <input
            id="LoggingEmailAddress"
            placeholder='anamolhasan.job@gmail.com'
            autoComplete='email'
            name='email'
            type="email"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        {/* password */}
        <div className="mt-4">
          <div className="flex justify-between">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="loggingPassword"
            >
              Password
            </label>
          </div>

          <input
            id="loggingPassword"
            placeholder='enter your password'
            name='password'
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            type="password"
          />
        </div>

        <div className="mt-6">
          <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-900 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Register
          </button>
        </div>
       </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

          <Link
            to={'/login'}
            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or sign In
          </Link>

          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </div>
    </div>
  )
}

export default Register