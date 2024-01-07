import React from 'react'
import { Navbar, Hero, FeaturedHouses } from './components'
import styles from './constants/styles'

const App = () => {
  return (
    <div className='bg-white overflow-hidden w-full'>
      <div className={`${styles.paddingX} flex-col  ${styles.flexCenter}`}>
        <div id='hero-and-nav'  className={`${styles.boxWidth}`}>
          <Navbar />
          <Hero />
        </div>
        <div className={`${styles.boxWidth}`}>
          <FeaturedHouses />
        </div>
      </div>
    </div>
  )
}

export default App