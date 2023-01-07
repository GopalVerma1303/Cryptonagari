import React from 'react'
import PostContainer from './PostContainer'
import DataPost from '../../assets/DataPost'
function PostListContainer() {
    return (
        <div className=' overflow-y-auto scrollbar-none '>
            {
                DataPost.map(e => {
                    return (
                        <PostContainer
                            img={e.img}
                            title={e.title}
                            content={e.content}
                            author={e.author}
                            like={e.like}
                            comments={e.comments}
                            time={e.time}
                        />
                    )
                })
            }

        </div>
    )
}

export default PostListContainer