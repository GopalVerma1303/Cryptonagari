import React from 'react'
import LogoutButton from './LogoutButton';
import InstallMetamaskButton from './InstallMetamaskButton'
import ConnectMetamaskButton from './ConnectMetamaskButton';
function HomeNavbar() {
    return (
        <div className='justify-center align-middle items-center flex-col pt-2 px-2 w-full'>
            <div className=' bg-black rounded-lg w-full justify-between items-center flex flex-row py-4 px-5'>
                <p className='text-[#7d7d7d] text-xl p-2 font-bold'>Welcome</p>
                <div className='flex'>
                    {/* <InstallMetamaskButton /> */}
                    {/* <LogoutButton /> */}
                    <ConnectMetamaskButton /> 
                </div>
            </div>
        </div>
    )
}

export default HomeNavbar