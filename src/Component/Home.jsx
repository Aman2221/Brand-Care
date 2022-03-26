import React from 'react'
import CountOn from './CountOn'
import Facts from './Facts'
import HealingComp from './HealingComp'
import HomePage from './HomePage'
import Navbar from './Navbar'
import OurOffering from './OurOffering'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <>
      <Navbar/>
      <HomePage />
      <HealingComp />
      <CountOn />
      <OurOffering />
      <Facts />
      <Testimonial />
    </>
  )
}

export default Home