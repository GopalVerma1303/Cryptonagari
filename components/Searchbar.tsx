import React from 'react'
import { FcSearch } from "react-icons/fc";
interface Props {
    placeholderText: String
}
function Searchbar({placeholderText} : Props) {
    return (
        <div className='w-full justify-center align-middle items-center py-2 pr-2'>
            <div className=' bg-black rounded-lg w-full justify-between items-center flex flex-row py-4 px-4 space-x-2'>
                <input
                    type="text"
                    placeholder={`${placeholderText}`}

                    className="flex-1 bg-transparent outline-none text-white"
                />
                <FcSearch className='hover:cursor-pointer' size={30} />
            </div>
        </div>
    )
}

export default Searchbar