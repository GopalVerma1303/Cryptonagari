import React, { useState, useEffect } from 'react'
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
import { FcHome } from "react-icons/fc";
import ProfileSidebarTile from './ProfileSidebarTile';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Sidebar() {
    const [page, setPage] = useState("Posts")
    const router = useRouter()
    useEffect(() => {
        setPage(router.pathname.slice(1))
        if (router.pathname.slice() == '/') {
            router.push('/Home')
            setPage('Home')
        }
    }, [])

    return (
        <div className='py-2 pl-2'>
            <div className=' bg-black h-full rounded-lg space-y-5 lg:space-y-0'>
                <div onClick={() => setPage("Home")} className='w-fit justify-center items-center align-middle hover:cursor-pointer pt-2 lg:pt-0'>
                    <Link href={'/Home'}>
                        <img src='/logo.jpg' className='w-12 rounded-full p-2 ml-4 lg:hidden' />
                        <img alt='logo' src="/title_in_extra_black.png" className=' self-center rounded-lg w-56 my-2 hidden lg:inline-flex' />
                    </Link>
                </div>
                <div className=' space-y-2 lg:p-2'>

                    <div onClick={() => setPage("Home")}>
                        <Link href={"/Home"}>
                            <SidebarTile title="Home" Icon={FcHome} page={page} />
                        </Link>
                    </div>

                    <div onClick={() => setPage("Posts")}>
                        <Link href={"/Posts"}>
                            <SidebarTile title="Posts" Icon={FcDatabase} page={page} />
                        </Link>
                    </div>


                    <div onClick={() => setPage("Messages")}>
                        <Link href={"/Messages"}>
                            <SidebarTile title="Messages" Icon={FcSms} page={page} />
                        </Link>
                    </div>

                    <div onClick={() => setPage("Crowdfunding")}>
                        <Link href={"/Crowdfunding"}>
                            <SidebarTile title="Crowdfunding" Icon={FcDonate} page={page} />
                        </Link>
                    </div>
                    <div onClick={() => setPage("Trading")}>
                        <Link href={"/Trading"}>
                            <SidebarTile title="Trading" Icon={FcCurrencyExchange} page={page} />
                        </Link>
                    </div>
                    <div onClick={() => setPage("Marketplace")}>
                        <Link href={"/Marketplace"}>
                            <SidebarTile title="Marketplace" Icon={FcShop} page={page} />
                        </Link>
                    </div>
                    <div onClick={() => setPage("Portfolio")}>
                        <Link href={"/Portfolio"}>
                            <SidebarTile title="Portfolio" Icon={FcComboChart} page={page} />
                        </Link>
                    </div>
                    <div onClick={() => setPage("Games")}>
                        <Link href={"/Games"}>
                            <SidebarTile title="Games" Icon={FcConferenceCall} page={page} />
                        </Link>
                    </div>
                    <div onClick={() => setPage("Profile")}>
                        <Link href={"/Profile"}>
                            <ProfileSidebarTile title={"Profile"} imgSrc={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} page={page} />
                        </Link>
                    </div>
                    <div onClick={() => setPage("Settings")}>
                        <Link href={"/Settings"}>
                            <SidebarTile title="Settings" Icon={FcSettings} page={page} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar