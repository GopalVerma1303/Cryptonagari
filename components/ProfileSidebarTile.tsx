import React, { SVGProps } from 'react'

interface Props {
    imgSrc: String,
    title: String,
    page: String
}

function ProfileSidebarTile({ imgSrc, title, page }: Props) {
    return (
        <div className={`flex item-center space-x-2 px-7 py-3 lg:rounded-lg transition-all duration-200 hover:bg-[#17161B] hover:cursor-pointer ${page == title && `bg-[#17161B]`}`}>
            <img src={`${imgSrc}`} className='h-6 w-6 rounded-full' />
            <div className='flex-col'>
                <p className=' text-[#7d7d7d] align-middle font-bold hidden lg:inline-flex'>{title}</p>
            </div>
        </div>
    )
}

export default ProfileSidebarTile