import { createBrowserRouter } from 'react-router'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
import AllJobs from '../pages/allJobs/AllJobs'
import JobDetails from '../pages/jobs/JobDetails'

export const router = createBrowserRouter([
    {
        path:'/',
        Component: Main,
        children:[
            {
                index:true,
                Component:Home,
                loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/jobs`)
            },
            {
                path:'/all-jobs',
                Component:AllJobs
            },
            {
                path:'/job/:id',
                Component:JobDetails,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
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