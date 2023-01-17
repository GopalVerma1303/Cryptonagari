import React from 'react'
import { FaSignOutAlt } from "react-icons/fa"; function LogoutButton() {
    return (
        <>
            <FaSignOutAlt className='text-red-700' size={24} />
            <p className='text-[#ff2525] font-bold'>Disconnect Metamask</p>
        </>
    )
}

export default LogoutButton