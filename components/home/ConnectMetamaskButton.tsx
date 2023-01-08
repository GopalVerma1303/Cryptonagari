import React from 'react'

function ConnectMetamaskButton() {
    return (
        <div className='flex space-x-2 justify-center items-center hover:cursor-pointer'>
            <img src='/metamask.svg' className='w-5 h-5' />
            <p className='text-[#FFA34D]'>Connect Metamask</p>
        </div>
    )
}

export default ConnectMetamaskButton