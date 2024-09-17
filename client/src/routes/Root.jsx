//Root file is the layout for the website 

import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../pages/Sidebar'
import Login from '../pages/Login'
import ContentPage from './ContentPage'
import Profile from '../pages/Profile'
import Home from '../pages/Home'

export default function root() {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className='flex-1'>
                    <Outlet />
                </main>
            </div>

        </>
    )
}


