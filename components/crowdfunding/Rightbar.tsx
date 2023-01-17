import React from 'react'
import Searchbar from '../Searchbar'
import CreateCampaignSidebar from './CreateCampaignSidebar'
function Rightbar() {
    return (
        <div className=' flex-col w-1/4 lg:inline-flex hidden'>
            <CreateCampaignSidebar />
        </div>
    )
}

export default Rightbar