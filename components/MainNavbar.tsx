import React from 'react'
import { FcGlobe } from "react-icons/fc";

function Navbar() {
    return (
        <div className='w-full justify-center align-middle items-center py-4 px-2'>
            <div className=' bg-black rounded-lg w-full justify-between items-center flex flex-row py-4 px-4'>
                <p className='text-[#7d7d7d] font-bold'>Posts</p>
                <FcGlobe size={24} />
            </div>
        </div>
    )
}

export default Navbar