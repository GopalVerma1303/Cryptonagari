import React from 'react'
import MainNavbar from './MainNavbar'
import PostContainer from './posts/PostContainer'
import PostListContainer from './posts/PostListContainer'


function Mainbar() {
    return (
        <div className='flex flex-1 h-screen w-3/5 flex-col'>
            <div>
                <MainNavbar />
            </div>
            <PostListContainer />
        </div>
    )
}

export default Mainbar