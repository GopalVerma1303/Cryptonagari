import React from 'react'
import { FcGlobe } from "react-icons/fc";
import { MdOutlineExplore } from "react-icons/md";
import { FcFilingCabinet } from "react-icons/fc";
import { HiBars3 } from "react-icons/hi2";
interface Props {
    title: String
}
function Navbar({ title }: Props) {
    return (
        <div className='w-full justify-center align-middle items-center pt-2 px-2'>
            <div className=' bg-black rounded-lg w-full justify-between items-center flex flex-row py-3.5 px-4'>
                <p className='text-[#7d7d7d] font-bold'>{title}</p>
                <div className='flex space-x-3'>
                    <MdOutlineExplore className='hover:cursor-pointer hidden lg:inline-flex text-[#7d7d7d]' size={30} />
                    <HiBars3 className='hover:cursor-pointer lg:hidden text-[#7d7d7d]' size={30} />
                </div>
            </div>
        </div>
    )
}

export default Navbar