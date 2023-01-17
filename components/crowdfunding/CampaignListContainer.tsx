import React from 'react'
import CampaignContainer from './CampaignContainer'

function CampaignListContainer() {
    return (
        <div className='overflow-y-auto scrollbar-none  flex-wrap justify-center flex  '>
            <CampaignContainer imageUrl="https://t3.ftcdn.net/jpg/05/30/85/72/360_F_530857273_HmpYueZCPNdOZG0j3XRIIcC7P5jsAj2E.jpg" title="Need funds for my dog" category="Education" owner="Gopal Verma" amount="0.135 BTC" dnt="3/24/2023, 8:14:45 AM" />
            <CampaignContainer imageUrl="https://i.pinimg.com/originals/e3/54/84/e354848c24d963cf8dbfae4117da6d4f.jpg" title="Need funds for my dog" category="Education" owner="Gopal Verma" amount="0.135 BTC" dnt="3/24/2023, 8:14:45 AM" />
            <CampaignContainer imageUrl="https://w0.peakpx.com/wallpaper/961/491/HD-wallpaper-a-lofi-romance-love-couple-artist-artwork-digital-art-artstation.jpg" title="Need funds for my dog" category="Education" owner="Gopal Verma" amount="0.135 BTC" dnt="3/24/2023, 8:14:45 AM" />
            <CampaignContainer imageUrl="https://c4.wallpaperflare.com/wallpaper/908/34/383/lofi-digital-anthro-hd-wallpaper-preview.jpg" title="Need funds for my dog" category="Education" owner="Gopal Verma" amount="0.135 BTC" dnt="3/24/2023, 8:14:45 AM" />
        </div>
    )
}

export default CampaignListContainer