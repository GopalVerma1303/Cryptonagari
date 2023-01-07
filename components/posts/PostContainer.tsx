import React from 'react'
import { FcGlobe } from "react-icons/fc";

function PostContainer() {
    return (
        <div className='flex py-2 px-2 w-full hover:cursor-pointer'>
            <div className=' bg-black h-full rounded-lg w-full overflow-y-auto'>
                <div className='w-60 justify-center items-center align-middle hover:cursor-pointer'>
                    <img alt='logo' src="/title_and_city.png" className=' self-center rounded-lg w-56 m-2' />
                </div>
            </div>
        </div>
    )
}

export default PostContainer
