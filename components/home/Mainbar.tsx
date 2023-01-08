import React from 'react'
import HomeNavbar from './HomeNavbar'
import LandingPage from './LandingPage'

function Mainbar() {
    return (
        <div className='flex flex-1 h-screen w-3/5 flex-col'>
            <div>
                <HomeNavbar />
            </div>
            <LandingPage />
        </div>
    )
}

export default Mainbar