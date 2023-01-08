import React from 'react'
import { FcGlobe } from "react-icons/fc";
import { FcFilingCabinet } from "react-icons/fc";
import { HiBars3 } from "react-icons/hi2";
import ConnectMetamaskButton from './ConnectMetamaskButton';
import LogoutButton from './LogoutButton';
function HomeNavbar() {
    return (
        <div className='justify-center align-middle items-center flex-col pt-2 px-2 w-full'>
            <div className=' bg-black rounded-lg w-full justify-between items-center flex flex-row py-4 px-5'>
                <p className='text-[#7d7d7d] text-xl p-2 font-bold'>Welcome</p>
                <div className='flex'>
                    {/* <LogoutButton /> */}
                    <ConnectMetamaskButton />

                </div>
            </div>
        </div>
    )
}

export default HomeNavbar