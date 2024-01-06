import React from 'react'
import { Navbar, Hero } from './components'
import styles from './constants/styles'

const App = () => {
  return (
    <div className='bg-white overflow-hidden w-full'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Hero />
        </div>
      </div>
    </div>
  )
}

export default App