import React from 'react'
import Searchbar from '../Searchbar'
import CreatePostSidebar from './CreatePostSidebar'
function Rightbar() {
    return (
        <div className=' flex-col w-1/4 lg:inline-flex hidden'>
            <CreatePostSidebar />
        </div>
    )
}

export default Rightbar