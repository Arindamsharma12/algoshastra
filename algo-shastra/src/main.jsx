import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import WebDev from './components/WebDev.jsx'
import DSA from './components/DSA.jsx'
import CourseContent from './components/CourseContent.jsx'
import Demo from './components/Demo.jsx'
import About from './components/About.jsx'
import AskGenie from './components/AskGenie.jsx'
import Test from './components/Test/Test.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/ask-genie',
        element:<AskGenie/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<Signup/>
      },
      {
        path:'/webdev',
        element:<WebDev/>
      },
      {
        path:'/dsa',
        element:<DSA/>
      },
      {
        path:'/test-course',
        element:<CourseContent/>
      },
      {
        path:'/test-paper',
        element:<Test/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>

)
