import React from 'react'
import MainNavbar from '../Navbar'
import CampaignContainer from './CampaignContainer'
import CampaignListContainer from './CampaignListContainer'


function Mainbar() {
    return (
        <div className='flex flex-1 h-screen w-3/5 flex-col'>
            <div>
                <MainNavbar title="Crowdfunding" />
            </div>
            <CampaignListContainer />
        </div>
    )
}

export default Mainbar