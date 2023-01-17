import React, { useState } from 'react';

function ConnectMetamaskButton() {
    return (
        <>
            <img src='/metamask.svg' className='w-5 h-5' />
            <p className='text-[#FFA34D] font-bold'>Connect Metamask</p>
        </>
    )
}

export default ConnectMetamaskButton