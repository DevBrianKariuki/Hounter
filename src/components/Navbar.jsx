import React from 'react'
import styles from '../constants/styles'
import { Logo } from '../assets'
import { menuLinks } from '../constants/constants'

const Navbar = () => {
  return (
    <nav className='w-full flex py-8 justify-between'>
      <div className='logo'>
        <img src={Logo} className='w-[90%] cursor-pointer' />
      </div>
      <div className='flex items-center  gap-3'>
        <ul className='list-none flex gap-3'>
          {menuLinks.map((link, index) => (
            <li className='font-lexend text-sm text-md text-primary'  key={link.id}>{link.title}</li>
          ))}
        </ul>
        <button className='font-lexend text-sm text-white bg-primary px-6  rounded-full  py-2'>Sign up</button>
      </div>
    </nav>
  )
}

export default Navbar