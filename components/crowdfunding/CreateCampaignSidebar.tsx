import React, { createContext, useState } from 'react'
import { FcGlobe } from "react-icons/fc";
import ProfileSidebarTile from '../ProfileSidebarTile';
import { IoFlag } from "react-icons/io5";
import { toast } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';
import { create as IPFSHTTPClient } from 'ipfs-http-client';
import { RiCheckboxCircleFill } from "react-icons/ri";
import CampaignFactory from '../../artifacts/contracts/Campaign.sol/CampaignFactory.json';
import { ethers } from 'ethers';
// require('dotenv').config({ path: '../.env.local' })

const projectId = '2Kilmuid1npkm9VPyuXCtfDMoyI'
const projectSecret = '4c4d6e596da4e2feb47d45631d22406f'
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')

const client = IPFSHTTPClient({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth
    }
})

const FormState = createContext("default");

function CreateCampaignSidebar(props: any) {
    const [form, setForm] = useState({
        campaignTitle: "",
        story: "",
        requiredAmount: "",
        category: "Education",
    });

    const [campaignTitle, setcampaignTitle] = useState("");
    const [story, setStory] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Education");
    const [address, setAddress] = useState("");

    const [uploadingLoading, setUploadingLoading] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [startCampaignLoading, setStartCampaignLoading] = useState(false);
    const [started, setStarted] = useState(false);

    const [storyUrl, setStoryUrl] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [image, setImage] = useState("");
    const ImageHandler = (e) => {
        setImage(e.target.files[0]);
    }
    const formHandler = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const uploadFiles = async (e: any) => {
        e.preventDefault();
        setUploadingLoading(true);
        if (story !== "") {
            try {
                const added = await client.add(story);
                setStoryUrl(added.path)
            } catch (error) {
                toast.warn("Error Uploading Story")
            }
        }
        if (image !== "") {
            try {
                const add = await client.add(image);
                setImageUrl(add.path);
            } catch (error) {
                toast.warn("Error Uploading Image");
            }
        }
        setUploadingLoading(false);
        setUploaded(true);
        toast.success("Files Uploaded Successfully")
    }

    const startCampaign = async (e: any) => {
        e.preventDefault();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        if (campaignTitle === "") {
            toast.warn("Title Field Is Empty");
        } else if (story === "") {
            toast.warn("Story Field Is Empty");
        } else if (amount === "") {
            toast.warn("Required Amount Field Is Empty");
        } else if (uploaded == false) {
            toast.warn("Files Upload Required")
        }
        else {
            setStartCampaignLoading(true)
            const contract = new ethers.Contract(
                process.env.NEXT_PUBLIC_ADDRESS,
                CampaignFactory.abi,
                signer
            );
            const CampaignAmount = ethers.utils.parseEther(amount);
            const campaignData = await contract.createCampaign(
                form.campaignTitle,
                CampaignAmount,
                imageUrl,
                form.category,
                storyUrl
            );
            await campaignData.wait();
            setAddress(campaignData.to);
            setStartCampaignLoading(false);
            setStarted(true);
        }
    }

    return (
        <FormState.Provider value={{ form, setForm, image, setImage, ImageHandler, setImageUrl, setStoryUrl }}>
            <div className='flex  h-full pr-2 py-2 '>
                <div className='bg-black h-full rounded-lg w-full p-5 flex-col space-y-9 '>
                    <div className=' justify-center items-center align-middle w-full'>
                        <p className='text-[#7d7d7d] text-2xl font-bold '>Wanna create your own Campaign?</p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <p className='text-[#7d7d7d]'>Image</p>
                        {/* <p className='text-[#2080ff]  hover:cursor-pointer'>Choose image to upload</p> */}
                        <input onChange={(e) => setImage(e.target.value)} className='w-3/4 rounded-lg bg-[#3c3a46] outline-none text-white p-2' type={'file'} accept='image/*' />
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <p className='text-[#7d7d7d]'>Title</p>
                        <input onChange={(e) => setcampaignTitle(e.target.value)} placeholder='Enter title...' className='w-3/4 rounded-lg bg-[#3c3a46] outline-none text-white p-2' />
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <p className='text-[#7d7d7d]'>Amount</p>
                        <input onChange={(e) => setAmount(e.target.value)} type={'number'} placeholder='Enter title...' className='w-3/4 rounded-lg bg-[#3c3a46] outline-none text-white p-2' />
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <p className='text-[#7d7d7d]'>Category</p>
                        {/* <input placeholder='Enter title...' className='w-3/4 rounded-lg bg-[#3c3a46] outline-none text-white p-2' /> */}
                        <select onChange={(e) => setCategory(e.target.value)} className='w-3/4 rounded-lg bg-[#3c3a46] outline-none text-white p-2'>
                            <option>Education</option>
                            <option>Health</option>
                            <option>Animals</option>
                        </select>
                    </div>
                    <div className="flex  justify-between w-full ">
                        <p className='text-[#7d7d7d]'>Story</p>
                        <textarea onChange={(e) => setStory(e.target.value)} placeholder='Enter story...' className=' rounded-lg w-3/4 h-full bg-[#3c3a46] outline-none text-white p-2' />
                    </div>
                    {
                        uploadingLoading == true ?
                            <div className="flex items-center justify-between w-gull">
                                <p className='text-[#7d7d7d]'>Done</p>
                                <div className=' bg-gradient-to-r  from-red-600 w-3/4 via-orange-600 to-yellow-600  rounded-lg p-3 px-5 items-center flex justify-center'>
                                    <TailSpin color='white' height={24} />
                                </div>
                            </div>
                            :
                            uploaded == false ?
                                <div className="flex items-center justify-between w-gull">
                                    <p className='text-[#7d7d7d]'>Done</p>
                                    <div onClick={uploadFiles} className='hover:cursor-pointer bg-gradient-to-r  from-red-600 w-3/4 via-orange-600 to-yellow-600  rounded-lg p-3 px-5 items-center flex justify-between'>
                                        <p className='text-white font-bold'>Upload Files</p>
                                        <IoFlag className=' text-white ' size={24} />
                                    </div>
                                </div>
                                :
                                <div className="flex items-center justify-between w-gull">
                                    <p className='text-[#7d7d7d]'>Done</p>
                                    <div className=' bg-gradient-to-r  from-red-600 w-3/4 via-orange-600 to-yellow-600  rounded-lg p-3 px-5 items-center flex justify-between'>
                                        <p className='text-white font-bold'>Uploaded successfully</p>
                                        <RiCheckboxCircleFill className=' text-white ' size={24} />
                                    </div>
                                </div>
                    }
                    {
                        startCampaignLoading == true ?
                            <div className="flex items-center justify-between w-gull">
                                <p className='text-[#7d7d7d]'>Done</p>
                                <div className=' bg-gradient-to-r  from-red-600 w-3/4 via-orange-600 to-yellow-600  rounded-lg p-3 px-5 items-center flex justify-center'>
                                    <TailSpin color='white' height={24} />
                                </div>
                            </div>
                            :
                            started == false ?
                                <div className="flex items-center justify-between w-gull">
                                    <p className='text-[#7d7d7d]'>Done</p>
                                    <div onClick={startCampaign} className='hover:cursor-pointer bg-gradient-to-r  from-red-600 w-3/4 via-orange-600 to-yellow-600  rounded-lg p-3 px-5 items-center flex justify-between'>
                                        <p className='text-white font-bold'>Start Campaign</p>
                                        <IoFlag className=' text-white ' size={24} />
                                    </div>
                                </div>
                                :
                                <div className="flex items-center justify-between w-gull">
                                    <p className='text-[#7d7d7d]'>Done</p>
                                    <div className=' bg-gradient-to-r  from-red-600 w-3/4 via-orange-600 to-yellow-600  rounded-lg p-3 px-5 items-center flex justify-between'>
                                        <p className='text-white font-bold'>Started successfully</p>
                                        <RiCheckboxCircleFill className=' text-white ' size={24} />
                                    </div>
                                </div>
                    }
                </div>
            </div>
        </FormState.Provider>
    )
}

export default CreateCampaignSidebar;

