import React from 'react'
import { FcBinoculars } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
interface Props {
    placeholderText: String
}
function Searchbar({ placeholderText }: Props) {
    return (
        <div className='w-full justify-center align-middle items-center py-2 pr-2 '>
            <div className=' bg-black rounded-lg w-full justify-center items-center flex flex-row py-4 px-4 space-x-2'>
                <input
                    type="text"
                    placeholder="Search"
                    className="flex-1 bg-transparent outline-none text-white"
                />
                <BsSearch className='text-slate-400 hover:cursor-pointer' size={20}  />
            </div>
        </div>
    )
}

export default Searchbar