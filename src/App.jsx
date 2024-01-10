import React from 'react'
import { Navbar, Hero, FeaturedHouses, LetsTour, Testimonials, Blog, Subscribe, Footer } from './components'
import styles from './constants/styles'

const App = () => {
  return (
    <div className='bg-white overflow-hidden w-full'>
      <div className={`flex-col  ${styles.flexCenter}`}>
        <div id='hero-and-nav'  className={`${styles.boxWidth} rounded-bl-3xl`}>
          <Navbar />
          <Hero />
        </div>
        <div className={`${styles.boxWidth}`}>
          <FeaturedHouses />
          <LetsTour/>
          <Testimonials />
          <Blog />
        </div>
        <div className={`${styles.boxWidth} sm:px-20 px-6`}>
          <Subscribe />
        </div>
        <div className={`${styles.boxWidth} ${styles.paddingX}`}>
          <Footer />
        </div>
      </div>
      
    </div>
  )
}

export default App