import React from 'react'
import MainNavbar from '../Navbar'
import PostContainer from './PostContainer'
import PostListContainer from './PostListContainer'


function Mainbar() {
    return (
        <div className='flex flex-1 h-screen w-3/5 flex-col'>
            <div>
                <MainNavbar title="Posts" />
            </div>
            <PostListContainer />
        </div>
    )
}

export default Mainbar