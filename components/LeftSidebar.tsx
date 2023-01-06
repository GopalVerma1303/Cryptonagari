import React from 'react'
import Image from 'next/image'
import SidebarTile from './SidebarTile'
import { FcCurrencyExchange } from "react-icons/fc";
import { FcSms } from "react-icons/fc";
import { FcShop } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcDatabase } from "react-icons/fc";
import { FcDonate } from "react-icons/fc";
import ProfileSidebarTile from './ProfileSidebarTile';

function Sidebar() {
    return (
        <div className='flex py-4 px-2'>
            <div className=' bg-black h-full rounded-lg'>
                <div className='w-60 justify-center items-center align-middle'>
                    {/* <img alt='logo' src="/title_and_city.png" className=' rounded-lg w-60 m-2' /> */}
                    <img alt='logo' src="/title_in_extra_black.png" className=' self-center rounded-lg w-56 m-2' />
                </div>
                <div className=' space-y-2 p-2'>
                    <SidebarTile title="Posts" Icon={FcDatabase} />
                    <SidebarTile title="Messages" Icon={FcSms} />
                    <SidebarTile title="Crowdfunding" Icon={FcDonate} />
                    <SidebarTile title="Trading" Icon={FcCurrencyExchange} />
                    <SidebarTile title="Marketplace" Icon={FcShop} />
                    <SidebarTile title="Portfolio" Icon={FcComboChart} />
                    <SidebarTile title="Games" Icon={FcConferenceCall} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar