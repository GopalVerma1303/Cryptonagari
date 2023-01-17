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
import { ethers } from "ethers";

const networks = {
    polygon: {
        chainId: `0x${Number(80001).toString(16)}`,
        chainName: "Polygon Testnet",
        nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18,
        },
        rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
        blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    },
};

function Sidebar() {

    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState("");

    const connectWallet = async () => {
        if (typeof window.ethereum == 'undefined') {
            alert('Please install Metamask!');
        } else {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
            if (provider.network !== "matic") {
                await window.ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [
                        {
                            ...networks["polygon"],
                        },
                    ],
                });
            }
            const account = provider.getSigner();
            const Address = await account.getAddress();
            setAddress(Address);
            const Balance = ethers.utils.formatEther(await account.getBalance());
            setBalance(Balance);
        }
    };

    const [page, setPage] = useState("Posts")
    const router = useRouter()
    useEffect(() => {
        setPage(router.pathname.slice(1))
        if (router.pathname.slice() == '/') {
            router.push('/Home')
            setPage('Home')
        }
    }, [router.pathname])

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
                    <div onClick={() => setPage("Settings")}>
                        <Link href={"/Settings"}>
                            <SidebarTile title="Settings" Icon={FcSettings} page={page} />
                        </Link>
                    </div>
                    <div onClick={() => connectWallet()}>
                        <ProfileSidebarTile
                            title={(address == "") ? "Metamask" : 
                            (address.slice(0, 3) + "..." + address.slice(address.length - 3, address.length)) }
                            imgSrc={"http://localhost:3000/metamask.svg"} page={page} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar