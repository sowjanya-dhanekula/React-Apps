import React from 'react'
import './Nav_menu.css'
import Home from '../Home/Home.js' /*we can write as '../Home' with out writing the Home.js because by default it will take as Home.js*/
import About from '../About'
import Contact from '../Contact/Contact.js'
import {createBrowserRouter,RouterProvider,Navigate} from 'react-router-dom'
export const Nav_menu =()=>{
  const router= createBrowserRouter([
    {
      path: '/home',
      element:<Home />
    },
    {
      path: '/about',
      element:<About />
    },
    {
      path: '/contact',
      element:<Contact />
    },
    {
      path: '*',
      element:<Navigate to='/home' />
    }
  ])

 return (
    <div>
        <div className='menu'>
            <a href='/home'>Home</a>
            <a href='/about'>About US</a>
            <a href='/contact'>Contact Me</a>
        </div>
        <RouterProvider router={router} />
    </div>
  )
}


