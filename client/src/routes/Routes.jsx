import { createBrowserRouter } from 'react-router'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
import AllJobs from '../pages/allJobs/AllJobs'

export const router = createBrowserRouter([
    {
        path:'/',
        Component: Main,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/all-jobs',
                Component:AllJobs
            },
            {
                path:'/login',
                Component:Login
            },
            {
                path:'/register',
                Component:Register
            },
        ]
    }
])