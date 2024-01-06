import React from 'react'
import styles from '../constants/styles'
import { Logo } from '../assets'
import { menuLinks } from '../constants/constants'

const Navbar = () => {
  return (
    <nav className='w-full flex py-8 justify-between'>
      <div className='logo'>
        <img src={Logo} className='w-[90%]' />
      </div>
      <div className='flex gap-3'>
        <p className='font-lexend'>What the hell</p>
        <ul className='list-none flex gap-3'>
        {menuLinks.map((link) => {
          <li className='text-primary'>{link.title}</li>
        })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar