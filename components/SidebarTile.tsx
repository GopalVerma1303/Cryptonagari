import React, { SVGProps } from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: String
}

function SidebarTile({ Icon, title }: Props) {
    return (
        <div className='flex item-center space-x-2 px-7 py-3 lg:rounded-lg transition-all duration-200 hover:bg-[#17161B] hover:cursor-pointer'>
            <Icon className='h-6 w-6 text-white ' />
            <p className=' text-[#7d7d7d] font-semibold hidden lg:inline-flex'>{title}</p>
        </div>
    )
}

export default SidebarTile