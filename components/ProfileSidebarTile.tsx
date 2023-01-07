import React, { SVGProps } from 'react'

interface Props {
    imgSrc: String,
    title: String
}

function ProfileSidebarTile({ imgSrc, title }: Props) {
    return (
        <div className='flex align-middle item-center space-x-2 rounded-lg transition-all duration-200'>
            <img src={`${imgSrc}`} className='h-10 w-10 rounded-full' />
            <div className='flex-col'>
                <p className=' text-[#7d7d7d] font-bold justify-center items-center align-middle'>{title}</p>
                <p className=' text-[#7d7d7d] text-xs justify-center items-center align-middle'>0xb286....hd92e</p>
            </div>
        </div>
    )
}

export default ProfileSidebarTile