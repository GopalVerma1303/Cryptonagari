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
import { FcSettings } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import ProfileSidebarTile from './ProfileSidebarTile';

function Sidebar() {
    return (
        <div className='py-2 pl-2'>
            <div className=' bg-black h-full rounded-lg space-y-5 lg:space-y-0'>
                <div className='w-fit justify-center items-center align-middle hover:cursor-pointer pt-2 lg:pt-0'>
                    <img src='/logo.jpg' className='w-12 rounded-full p-2 ml-4 lg:hidden' />
                    <img alt='logo' src="/title_in_extra_black.png" className=' self-center rounded-lg w-56 m-2 hidden lg:inline-flex' />
                </div>
                <div className=' space-y-2 lg:p-2'>
                    <SidebarTile title="Posts" Icon={FcDatabase} />
                    <SidebarTile title="Messages" Icon={FcSms} />
                    <SidebarTile title="Crowdfunding" Icon={FcDonate} />
                    <SidebarTile title="Trading" Icon={FcCurrencyExchange} />
                    <SidebarTile title="Marketplace" Icon={FcShop} />
                    <SidebarTile title="Portfolio" Icon={FcComboChart} />
                    <SidebarTile title="Games" Icon={FcConferenceCall} />
                    <SidebarTile title="Profile" Icon={FcBusinessContact} />
                    <SidebarTile title="Settings" Icon={FcSettings} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar