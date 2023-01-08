import React from 'react'
import LogoutButton from './LogoutButton'

function ConnectMetamaskSidebar() {
    return (
        <div className='flex  h-full pr-2 py-2'>
            <div className=' bg-black h-full rounded-lg w-full p-5 flex-col space-y-9 justify-center items-center'>
                <div className=' justify-center items-center align-middle w-full'>
                    <p className='text-[#7d7d7d] text-2xl font-bold'>Sign in</p>
                    <img src='/metamask.svg' className='w-full p-11' />
                    <div className='flex space-x-2 justify-center align-middle items-center hover:cursor-pointer text-sm mx-10 border p-2 rounded-lg border-[#ffa340] hover:bg-[#ffa340] font-bold transition-all duration-200 text-[#ffa340] hover:text-black'>
                        Connect Metamask
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectMetamaskSidebar