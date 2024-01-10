import React from 'react'
import styles from '../constants/styles'
import { Logo } from '../assets'
import { menuLinks } from '../constants/constants'

const Navbar = () => {
  return (
    <nav className='w-full sm:px-20 px-6 flex py-8 justify-between'>
      <div className='logo'>
        <img src={Logo} className='w-[120px] cursor-pointer' />
      </div>
      <div className='flex items-center  gap-6'>
        <ul className='list-none flex gap-6'>
          {menuLinks.map((link, index) => (
            <button className='text-white bg-white px-4 border-[1px] py-2 rounded-full bg-opacity-30'>
            <li className='font-lexend text-sm'  key={link.id}>{link.title}</li>
            </button>
          ))}
        </ul>
        <button className='font-lexend text-sm bg-greenbutton text-green px-6  rounded-full  py-2'>Sign up!</button>
      </div>
    </nav>
  )
}

export default Navbar