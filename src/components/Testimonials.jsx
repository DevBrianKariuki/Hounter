import React from 'react'
import { Testimonies } from '../constants/constants'
import Carousel from './Carousel'
import { Slider1, Slider2, Slider3, Slider4 } from '../assets'
import { FaStar } from "react-icons/fa6";

const Testimonials = () => {
    const slides = [Slider1, Slider2, Slider3, Slider4]

  return (
    <div className='w-full flex flex-col py-16'>
        <div className='flex flex-col items-center mb-6  gap-4 justify-center'>
            <p className='font-lexend text-sm text-orange'>See Our Reviews</p>
            <p className='text-3xl font-lexend text-primary text-center font-bold'>What Our Users Say About Us</p>
        </div>

        <div className='grid grid-cols-3 gap-2 items-center justify-center w-full overflow-hidden'>
            {Testimonies.map((tesimonty) => (
                <TestimonialCard key={tesimonty.id} title={tesimonty.title} image={tesimonty.picture} desc={tesimonty.desc}
                buyerphoto={tesimonty.buyer_picture}  buyername={tesimonty.buyer_name} buyertitle={tesimonty.buyer_title}
                rating={tesimonty.rating}/>
            ))}
        </div>
        
        {/* <div className='w-full ' > */}
            
            {/* <Carousel autoSlide={true} autoSlideInterval={1000}>
                {slides.map((image) => (
                    <img src={image}  />
                ))}
            </Carousel> */}
        {/* </div> */}
    </div>
  )
}

const TestimonialCard = ({title, image, desc, buyerphoto, buyername, buyertitle, rating}) => (
    <div className='flex flex-col items-center justify-center relative'>
        <div className='w-full'>
            <img src={image}  />
        </div>
        <div className='w-[90%] absolute bottom-0 left-0 right-0 bg-white shadow-md rounded-xl p-3 flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <p className='font-lexend text-xl font-medium text-primary'>{title}</p>
                <p className='font-lexend opacity-70 text-xs text-fadeblue'>{desc}</p>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-4 items-center'>
                    <img src={buyerphoto} className='w-[35px]' />
                    <div className='flex flex-col'>
                        <p className='font-lexend text-sm text-primary'>{buyername}</p>
                        <p className='font-lexend text-xs text-fadeblue opacity-70'>{buyertitle}</p>
                    </div>
                </div>
                <div className='flex items-center font-lexend text-primary gap-1'>
                    <FaStar  className='text-orange'/>
                    {rating}
                </div>
            </div>
        </div>
    </div>
)


export default Testimonials