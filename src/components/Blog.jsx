import React from 'react'
import { blogs } from '../constants/constants'
import { IoTimeSharp } from "react-icons/io5";
import { blog4, seller4 } from '../assets';

const Blog = () => {
  return (
    <div className='w-full sm:px-20 px-6 flex flex-col py-12'>
        <div className='flex w-full mb-6 flex-col items-center gap-4 justify-center'>
            <p className='font-lexend text-sm text-orange'>See tips and trick from our partnership</p>
            <p className='font-lexend text-3xl font-bold text-primary'>Find out more about
                selling and buying homes
            </p>
            <button className='bg-green font-lexend text-white px-6 py-2 rounded-full'>More Articles</button>
        </div>
        <div className='flex flex-col px-6 md:flex-row w-full my-5'>
            <div className='w-full flex flex-col gap-4 justify-center'>
                {blogs.map((eachblog) => (
                    <BlogCard key={eachblog.id} picture={eachblog.picture} writer_pic={eachblog.writer_pic} 
                    writer={eachblog.writer} title={eachblog.title} time={eachblog.date}/>
                ))}
            </div>
            <div className='w-full hover:scale-105 flex px-6 flex-col gap-4 justify-center'>
                <img src={blog4}  className=''/>
                <div className='w-full flex gap-3'>
                    <div className='flex flex-col justify-center gap-3'>
                        <div className='flex items-center gap-2'>
                            <img src={seller4} className='w-[30px]' />
                            <p className='font-lexend text-fadeblue'>{`Cameron Williamson`}</p>
                        </div>
                        <h1 className='font-lexend text-xl hover:font-semibold  font-medium text-primary'>{`12 Things to know before buying a house`}</h1>
                        <p className='font-lexend text-sm text-fadeblue'>{`Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house`}</p>
                        <div className='flex items-center opacity-70 font-lexend text-sm text-fadeblue  gap-2'>
                            <IoTimeSharp />
                            <p>{`8 min read | 25 Apr 2021`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

const BlogCard = ({picture, writer_pic, writer, title, time}) => (
    <div className='w-full hover:cursor-pointer hover:scale-105 flex py-2  gap-5'>
        <img src={picture} className='w-[25%] h-[100%]' />
        <div className='flex flex-col justify-center gap-1'>
            <div className='flex items-center gap-2'>
                <img src={writer_pic}  className='w-[30px]'/>
                <p className='font-lexend  text-sm text-fadeblue'>{writer}</p>
            </div>
            <h1 className='font-lexend font-medium  md:w-[80%]  hover:font-semibold text-primary'>{title}</h1>
            <div className='flex items-center hover:text-fadeblue opacity-70 text-fadeblue font-lexend text-sm gap-2'>
                <IoTimeSharp />
                <p>{time}</p>
            </div>
        </div>
    </div>
)

export default Blog