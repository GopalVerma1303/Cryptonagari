import Link from 'next/link';
import React from 'react'
import { FaSignOutAlt } from "react-icons/fa";
import { RiInstallFill } from "react-icons/ri";
function LogoutButton() {
    return (
        <Link href={"https://metamask.io/"}>
            <div className='flex space-x-1 justify-center items-center hover:cursor-pointer'>
                <RiInstallFill className='text-[#3a911f]' size={24} />
                <p className='text-[#3a911f] font-bold'>Install Metamask</p>
            </div>
        </Link>

    )
}

export default LogoutButton