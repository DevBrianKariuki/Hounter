import React from 'react'
import { IoMail } from "react-icons/io5";
import { subscribe1, subscribe2 } from '../assets';

const Subscribe = () => {
  return (
    <div id='subscribe-div' className='w-full flex justify-between py-12 bg-green px-8  items-center rounded-3xl'>
        <img src={subscribe1} />
        <div className='flex gap-4 flex-col'>
            <p className='font-lexend text-3xl font-bold text-primary'>Subscribe For More Info <br /> and update from Hounter</p>
            <div className='rounded-full bg-white  pl-2 p-[1px] w-full items-center border-[1px] border-[fadeblue] justify-between flex'>
                <div className='flex items-center gap-3'>
                    <IoMail fontSize={24} className='text-skyblue' />
                    <input className='font-lexend text-xs text-primary outline-none rounded-full  focus:ring-0'  placeholder='Your email here' />
                </div>
                <button className='bg-green flex items-center gap-2 text-white py-3 px-6 font-lexend text-sm  rounded-full'>
                    Subscribe Now
                </button>
            </div>
        </div>
        <img src={subscribe2} />
    </div>
  )
}

export default Subscribe