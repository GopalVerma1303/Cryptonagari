import React from 'react'
import PostContainer from './PostContainer'
function PostListContainer() {
    return (
        <div className=' overflow-y-auto scrollbar-none '>
            <PostContainer />
            <PostContainer />
            <PostContainer />
            <PostContainer />
            <PostContainer />
            <PostContainer />
            <PostContainer />
            <PostContainer />
            <PostContainer />

        </div>
    )
}

export default PostListContainer