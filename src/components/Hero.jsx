import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { traveloka, tiket, airbnb, tripadvisor } from '../assets'

const Hero = () => {
  return (
    <div className='w-full py-12 flex justify-stretch'>
      <div className='w-[40%] justify-start my-10 flex flex-col gap-5'>
        <div className='flex flex-col'>
          <h1 className='font-lexend text-4xl font-bold text-primary'>Find The Place To Live Your Dreams Easily Here</h1>
          <p className='font-lexend text-sm my-5 text-fadeblue'>Everything you need about finding your place to live will be here, where it will be easier for you</p>
        </div>
        <div className='rounded-full pl-2 p-[1px] w-full items-center border-[1px] border-[fadeblue] justify-between flex'>
          <FaLocationDot fontSize={24} className='text-orange' />
          <input className='font-lexend text-xs text-primary outline-none rounded-full  focus:ring-0'  placeholder='Search the location you want' />
          <button className='bg-green flex items-center gap-2 text-white py-2 px-6 font-lexend  rounded-full'>
            Search <IoIosArrowForward fontSize={24}/>
          </button>
        </div>
        <div className='justify-start w-full flex flex-col'>
          <p className='font-lexend text-sm text-fadeblue'>Our Partnership</p>
          <div className='flex items-center justify-between  w-full'>
            <img src={traveloka} />
            <img src={tiket} />
            <img src={airbnb} />
            <img src={tripadvisor} />
          </div>
        </div>
      </div>
      <div className='w-[60%] flex flex-col justify-end'>
        <div className='flex flex-col'></div>
      </div>
    </div>
  )
}

export default Hero