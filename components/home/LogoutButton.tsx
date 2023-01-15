import React from 'react'
import { FaSignOutAlt } from "react-icons/fa"; function LogoutButton() {
    return (
        <div className='flex space-x-1 justify-center items-center hover:cursor-pointer'>
            <FaSignOutAlt className='text-red-700' size={24} />
            <p className='text-[#ff2525] font-bold'>Disconnect Metamask</p>
        </div>
    )
}

export default LogoutButton