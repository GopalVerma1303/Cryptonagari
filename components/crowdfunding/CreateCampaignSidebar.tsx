import React from 'react'
import { FcGlobe } from "react-icons/fc";
import ProfileSidebarTile from '../ProfileSidebarTile';
import { IoPaperPlane } from "react-icons/io5";

function CreateCampaignSidebar(props: any) {
    return (
        <div className='flex  h-full pr-2 py-2 '>
            <div className='bg-black h-full rounded-lg w-full p-5 flex-col space-y-9 '>
                <div className=' justify-center items-center align-middle w-full'>
                    <p className='text-[#7d7d7d] text-2xl font-bold '>Wanna create your own Campaign?</p>
                </div>
                <div className="flex items-center justify-between w-full">
                    <p className='text-[#7d7d7d]'>Image</p>
                    <p className='text-[#2080ff]  hover:cursor-pointer'>Choose image to upload</p>
                </div>
                <div className="flex items-center justify-between w-full">
                    <p className='text-[#7d7d7d]'>Title</p>
                    <input placeholder='Enter title...' className='w-3/4 rounded-lg bg-[#3c3a46] outline-none text-white p-2' />
                </div>
                <div className="flex items-center justify-between w-full">
                    <p className='text-[#7d7d7d]'>Amount</p>
                    <input placeholder='Enter title...' className='w-3/4 rounded-lg bg-[#3c3a46] outline-none text-white p-2' />
                </div>
                <div className="flex items-center justify-between w-full">
                    <p className='text-[#7d7d7d]'>Category</p>
                    <input placeholder='Enter title...' className='w-3/4 rounded-lg bg-[#3c3a46] outline-none text-white p-2' />
                </div>
                <div className="flex  justify-between w-full h-40 ">
                    <p className='text-[#7d7d7d]'>Story</p>
                    <textarea placeholder='Enter story...' className=' rounded-lg w-3/4 h-full bg-[#3c3a46] outline-none text-white p-2' />
                </div>
                <div className="flex items-center justify-between w-gull">
                    <p className='text-[#7d7d7d]'>Done</p>
                    <div className='hover:cursor-pointer bg-gradient-to-r  from-red-600 w-3/4 via-orange-600 to-yellow-600  rounded-lg p-3 px-5 items-center flex justify-between'>
                        <p className='text-white font-bold'>Start Campaign</p>
                        <IoPaperPlane className=' text-white ' size={24} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateCampaignSidebar