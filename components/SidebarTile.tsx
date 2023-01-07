import React, { SVGProps } from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: String
    page: String
}

function SidebarTile({ Icon, title, page }: Props) {
    return (
        <div className={`flex item-center space-x-2 px-7 py-3 lg:rounded-lg transition-all duration-200 hover:bg-[#17161B] hover:cursor-pointer ${page == title && `bg-[#17161B]`}`}>
            <Icon className='h-6 w-6 text-white ' />
            <p className={`text-[#999999] font-semibold hidden lg:inline-flex ${page == title && `text-[#e7e7e7] font-bold`}`}>{title}</p>
        </div>
    )
}

export default SidebarTile