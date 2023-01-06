import React, { SVGProps } from 'react'

interface Props {
    imgSrc: String,
    title: String
}

function ProfileSidebarTile({ imgSrc, title }: Props) {
    return (
        <div className='flex item-center space-x-2 px-7 py-3 rounded-lg transition-all duration-200 hover:bg-[#17161B]'>
            <img src={`${imgSrc}`} className='h-6 w-6 rounded-full'  />
            <p className=' text-[#7d7d7d] font-semibold'>{title}</p>
        </div>
    )
}

export default ProfileSidebarTile