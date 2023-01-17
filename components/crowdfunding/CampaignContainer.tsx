import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { RiCalendarFill } from "react-icons/ri";
import { RiPriceTag3Fill } from "react-icons/ri";

function CampaignContainer(props: any) {
    return (
        <div className=' bg-[#000000] rounded-lg flex-wrap w-96 m-3 h-fit text-white hover:cursor-pointer'>
            <img src={props.imageUrl} className=' w-fit rounded-lg flex' />
            <div className=' p-5 text-[#7d7d7d] space-y-2'>
                <div className='flex justify-between text-white'>
                    <p className=' text-xl font-bold py-5'>{props.title}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='flex items-center space-x-4'><RiPriceTag3Fill className='mr-2' />Category</p>
                    <p>{props.category}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='flex items-center space-x-4'><BsFillPersonFill className='mr-2' />Owner</p>
                    <p>{props.owner}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='flex items-center'><RiMoneyDollarCircleFill className='mr-2' />Amount</p>
                    <p>{props.amount}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='flex items-center'><RiCalendarFill className='mr-2' />Date & Time</p>
                    <p>{props.dnt}</p>
                </div>
            </div>
        </div>
    )
}

export default CampaignContainer