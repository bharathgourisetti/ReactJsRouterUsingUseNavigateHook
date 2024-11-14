import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './../components/Navbar';

const Routelayout = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Outlet />
            </div>
        </>
    )
}

export default Routelayout