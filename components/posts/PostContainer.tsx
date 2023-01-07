import React from 'react'
import { FcGlobe } from "react-icons/fc";
import internal from 'stream';
import { HiOutlineHeart } from "react-icons/hi2";
import { HiHeart } from "react-icons/hi2";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { HiOutlineShare } from "react-icons/hi2";
import { HiEllipsisHorizontal } from "react-icons/hi2";

interface Props {
    img: String,
    author: String,
    title: String,
    content: String,
    time: String,
    like: String,
    comments: String
}

function PostContainer({ img, author, title, content, time, like, comments }: Props) {
    return (
        <div className='flex py-2 px-2 w-full'>
            <div className=' bg-black h-full rounded-lg w-full'>
                <div className='w-full items-center'>
                    <div className='flex p-5 justify-between items-center'>
                        <div className=' justify-center flex space-x-2 align-middle items-center m--2'>
                            <img alt='logo' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className='flex w-10 h-10 rounded-lg ' />
                            <div>
                                <p className='text-white'>{author}</p>
                                <p className='text-white  text-xs font-light'>{time}</p>
                            </div>
                        </div>
                        <div>
                            <HiEllipsisHorizontal className='text-[#7d7d7d] ' size={24} />
                        </div>

                    </div>
                    <div className=' justify-center align-middle items-center w-full p-5 rounded-lg flex-row'>
                        <img alt='logo' src={`${img}`} className='flex rounded-lg w-auto h-auto hover:cursor-pointer' />
                    </div>
                    <div className='p-5'>
                        <p className='text-white text-xl font-extrabold'>{title}</p>
                        <p className='text-white text-sm font-light'>{content}</p>
                    </div>
                    <div className='flex justify-start space-x-5 p-5'>
                        <p className='text-[#7d7d7d]  flex hover:text-red-500 hover:cursor-pointer transition-all duration-200'><HiOutlineHeart size={24} /> {like}</p>
                        <p className='text-[#7d7d7d]  flex hover:text-blue-500 hover:cursor-pointer transition-all duration-200'><HiOutlineChatBubbleOvalLeft size={24} /> {comments}</p>
                        <p className='text-[#7d7d7d]  flex hover:text-green-500 hover:cursor-pointer transition-all duration-200'><HiOutlineShare size={24} /> {comments}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostContainer
