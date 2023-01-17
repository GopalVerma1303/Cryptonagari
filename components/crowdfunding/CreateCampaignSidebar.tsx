import React, { createContext, useState } from 'react'
import { FcGlobe } from "react-icons/fc";
import ProfileSidebarTile from '../ProfileSidebarTile';
import { IoPaperPlane } from "react-icons/io5";
import { toast } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';
import { create as IPFSHTTPClient } from 'ipfs-http-client';
import { RiCheckboxCircleFill } from "react-icons/ri";

const client = IPFSHTTPClient({ url: "https://ipfs.infura.io:5001/api/v0" });

const FormState = createContext("default");

function CreateCampaignSidebar(props: any) {
    const [form, setForm] = useState({
        campaingTitle: "",
        story: "",
        requiredAmount: "",
        category: "Education",
    });

    const [campaingTitle, setCampaingTitle] = useState("");
    const [story, setStory] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Education");

    const [uploadingLoading, setUploadingLoading] = useState(false);
    const [uploaded, setUploaded] = useState(false);

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

    const uploadFiles = () => {

    }

    return (
        <FormState.Provider value={{ form, setForm, image, setImage, ImageHandler }}>
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
                        <input onChange={(e) => setCampaingTitle(e.target.value)} placeholder='Enter title...' className='w-3/4 rounded-lg bg-[#3c3a46] outline-none text-white p-2' />
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
                    <div className="flex  justify-between w-full h-40 ">
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
                            uploaded == true ?
                                <div className="flex items-center justify-between w-gull">
                                    <p className='text-[#7d7d7d]'>Done</p>
                                    <div onClick={uploadFiles} className='hover:cursor-pointer bg-gradient-to-r  from-red-600 w-3/4 via-orange-600 to-yellow-600  rounded-lg p-3 px-5 items-center flex justify-between'>
                                        <p className='text-white font-bold'>Start Campaign</p>
                                        <IoPaperPlane className=' text-white ' size={24} />
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
                </div>
            </div>
        </FormState.Provider>
    )
}

export default CreateCampaignSidebar;
export { FormState };