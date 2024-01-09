import React, {useEffect, useState} from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const Carousel = ({children: slides, 
    autoSlide = false, 
    autoSlideInterval = 2000}) => {

    const [Curr, setCurr] = useState(0)

    const prev = () =>
    setCurr((Curr) === 0 ? slides.length - 1 : Curr - 1)

    const next = () =>
    setCurr((Curr) === slides.length - 1 ? 0  : Curr + 1)

    useEffect(()=>{
        if(!autoSlide) return
        const SlideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(SlideInterval)
    },[])

  return (
    <div className='overflow-hidden relative'>
        <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${Curr * 100}%)` }}>{slides}</div>
        <div className='absolute inset-0 flex items-center fixed  justify-between'>
            <button onClick={prev}>
                <BsChevronLeft className='text-white rounded-full p-2 bg-primary' size={40}/>
            </button>
            <button onClick={next}>
                <BsChevronRight className='text-white rounded-full p-2 bg-primary' size={40}/>
            </button>
        </div>
        <div className='absolute bottom-4 right-0 left-0'>
            <div className='flex items-center justify-center gap-3'>
                {slides.map((_, i) => (
                    <div className={`transition-all w-3 h-3 bg-white rounded-full
                    ${Curr === i ? 'p-2' : 'bg-opacity-50'}`} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Carousel