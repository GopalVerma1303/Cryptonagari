import React, { useEffect, useState } from 'react'
import CampaignContainer from './CampaignContainer'
import CampaignFactory from '../../artifacts/contracts/Campaign.sol/CampaignFactory.json';
import { ethers } from 'ethers';

export default function CampaignListContainer() {

    const [allData, setAllData] = useState({});

    const fetchData = async () => {
        const provider = new ethers.providers.JsonRpcProvider(
            process.env.NEXT_PUBLIC_RPC_URL
        );

        const contract = new ethers.Contract(
            process.env.NEXT_PUBLIC_ADDRESS,
            CampaignFactory.abi,
            provider
        );

        const getDeployedCampaign = contract.filters.campaignCreated();
        let events = await contract.queryFilter(getDeployedCampaign);
        let event = events.reverse();
        setAllData(event)
        alert(event[0].args[13])
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div className='overflow-y-auto scrollbar-none  flex-wrap justify-center flex  '>
            {
                // AllData.map((e) => {
                //     <CampaignContainer
                //         imageUrl="https://t3.ftcdn.net/jpg/05/30/85/72/360_F_530857273_HmpYueZCPNdOZG0j3XRIIcC7P5jsAj2E.jpg"
                //         title={e.title}
                //         category="Education"
                //         owner="Gopal Verma"
                //         amount="0.135 BTC"
                //         dnt="3/24/2023, 8:14:45 AM" />
                // })
                <CampaignContainer
                    imageUrl="https://t3.ftcdn.net/jpg/05/30/85/72/360_F_530857273_HmpYueZCPNdOZG0j3XRIIcC7P5jsAj2E.jpg"
                    title="Title"
                    category="Education"
                    owner="Gopal Verma"
                    amount="0.135 BTC"
                    dnt="3/24/2023, 8:14:45 AM" />
            }
        </div>
    )
}


export async function getStaticProps() {
    const provider = new ethers.providers.JsonRpcProvider(
        process.env.NEXT_PUBLIC_RPC_URL
    );

    const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_ADDRESS,
        CampaignFactory.abi,
        provider
    );

    const getAllCampaigns = contract.filters.campaignCreated();
    const AllCampaigns = await contract.queryFilter(getAllCampaigns);
    const AllData = AllCampaigns.map((e) => {
        return {
            title: e.args.title,
            image: e.args.imgURI,
            owner: e.args.owner,
            timeStamp: parseInt(e.args.timestamp),
            amount: ethers.utils.formatEther(e.args.requiredAmount),
            address: e.args.campaignAddress
        }
    });

    const getHealthCampaigns = contract.filters.campaignCreated(null, null, null, null, null, null, 'Health');
    const HealthCampaigns = await contract.queryFilter(getHealthCampaigns);
    const HealthData = HealthCampaigns.map((e) => {
        return {
            title: e.args.title,
            image: e.args.imgURI,
            owner: e.args.owner,
            timeStamp: parseInt(e.args.timestamp),
            amount: ethers.utils.formatEther(e.args.requiredAmount),
            address: e.args.campaignAddress
        }
    });

    const getEducationCampaigns = contract.filters.campaignCreated(null, null, null, null, null, null, 'education');
    const EducationCampaigns = await contract.queryFilter(getEducationCampaigns);
    const EducationData = EducationCampaigns.map((e) => {
        return {
            title: e.args.title,
            image: e.args.imgURI,
            owner: e.args.owner,
            timeStamp: parseInt(e.args.timestamp),
            amount: ethers.utils.formatEther(e.args.requiredAmount),
            address: e.args.campaignAddress
        }
    });

    const getAnimalCampaigns = contract.filters.campaignCreated(null, null, null, null, null, null, 'Animal');
    const AnimalCampaigns = await contract.queryFilter(getAnimalCampaigns);
    const AnimalData = AnimalCampaigns.map((e) => {
        return {
            title: e.args.title,
            image: e.args.imgURI,
            owner: e.args.owner,
            timeStamp: parseInt(e.args.timestamp),
            amount: ethers.utils.formatEther(e.args.requiredAmount),
            address: e.args.campaignAddress
        }
    });

    return {
        props: {
            AllData,
            HealthData,
            EducationData,
            AnimalData
        },
        revalidate: 10
    }
}




