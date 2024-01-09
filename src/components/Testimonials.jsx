import React from 'react'
import { Testimonies } from '../constants/constants'
import Carousel from './Carousel'
import { Slider1, Slider2, Slider3, Slider4 } from '../assets'

const Testimonials = () => {
    const slides = [Slider1, Slider2, Slider3, Slider4]

  return (
    <div className='w-full flex flex-col py-16'>
        <div className='flex flex-col items-center  gap-4 justify-center'>
            <p className='font-lexend text-sm text-orange'>See Our Reviews</p>
            <p className='text-3xl font-lexend text-primary text-center font-bold'>What Our Users Say About Us</p>
        </div>
        
        <div className='w-full ' >
            {/* <Carousel autoSlide={true} autoSlideInterval={1000}>
                {slides.map((image) => (
                    <img src={image}  />
                ))}
            </Carousel> */}
        </div>
    </div>
  )
}

const TestimonialsCard = ({image, title}) => {
    <div className='w-[90%] flex flex-col'>
        <div className='flex-1 w-full'>
            <img src={image} />
        </div>
        <div>{title}</div>
    </div>
}

export default Testimonials