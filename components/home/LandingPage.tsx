import React from 'react'
import PageContent from './PageContent'
function LandingPage() {
    return (
        <div className='flex py-2 px-2 w-full h-full flex-col overflow-y-scroll scrollbar-none'>
            <img src='/title_in_extra_black.png' className='rounded-lg w-full' />
            <div className='w-full p-2 -mt-10 bg-black text-white rounded-lg justify-center flex h-full'>
                <h1
                    className=" text-center font-extrabold text-transparent text-3xl lg:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                >
                    "Where freedom feels like home"
                </h1>
            </div>
        </div>
    )
}

export default LandingPage