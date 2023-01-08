import React from 'react'
import { FcGlobe } from "react-icons/fc";
import ProfileSidebarTile from '../ProfileSidebarTile';
import { IoPaperPlane } from "react-icons/io5";

function CreatePostSidebar() {
    return (
        <div className='flex  h-full pr-2'>
            <div className=' bg-black h-full rounded-lg w-full p-5 flex-col space-y-9 '>
                <div className=' justify-center items-center align-middle w-full'>
                    <p className='text-[#7d7d7d] text-2xl font-bold '>What's on your mind?</p>
                </div>
                <div className="flex items-center justify-between w-full">
                    <p className='text-[#7d7d7d]'>Author</p>
                    <ProfileSidebarTile title={"0xa...bc4"} imgSrc="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" page={""} />
                </div>
                <div className="flex items-center justify-between w-full">
                    <p className='text-[#7d7d7d]'>Image</p>
                    <p className='text-[#2080ff]  hover:cursor-pointer'>Choose image to upload</p>
                </div>
                <div className="flex items-center justify-between w-full">
                    <p className='text-[#7d7d7d]'>Title</p>
                    <input placeholder='Enter title...' className='w-3/4 rounded-lg bg-[#3c3a46] outline-none text-white p-2' />
                </div>
                <div className="flex  justify-between w-full h-52 ">
                    <p className='text-[#7d7d7d]'>Content</p>
                    <textarea placeholder='Enter content...' className=' rounded-lg w-3/4 h-full bg-[#3c3a46] outline-none text-white p-2' />
                </div>
                <div className='hover:cursor-pointer bg-gradient-to-r  from-purple-600 via-pink-600 to-blue-600  rounded-lg p-3 px-5 items-center flex justify-between'>
                    <p className='text-white font-bold'>Create post</p>
                    <IoPaperPlane className=' text-white ' size={24} />
                </div>
            </div>
        </div>
    )
}

export default CreatePostSidebar