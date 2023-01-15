import React, { useState } from 'react';
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

function ConnectMetamaskButton() {
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState("");

    const connectWallet = async () => {
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

    };

    return (
        <div
            onClick={() => connectWallet()}
            className='flex space-x-2 justify-center items-center hover:cursor-pointer'>
            <img src='/metamask.svg' className='w-5 h-5' />
            <p className='text-[#FFA34D] font-bold'>Connect Metamask</p>
        </div>
    )
}

export default ConnectMetamaskButton