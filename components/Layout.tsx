import React from 'react'
import LeftSidebar from './SideNavbar'
function Layout({ children }) {
    return (
        <div className="flex flex-row h-screen bg-[#17161B]">
            <LeftSidebar />
            {children}
        </div>
    )
}

export default Layout