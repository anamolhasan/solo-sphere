import { createBrowserRouter } from 'react-router'
import Main from '../layouts/Main'

export const router = createBrowserRouter([
    {
        path:'/',
        Component: Main
    }
])