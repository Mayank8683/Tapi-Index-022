import React from 'react'
import Home from './hero'
import Navbar from './navbar'
import CardComponent from './box'
import GridBlurredBackdrop from './testimonial'
import LargeWithNewsletter from './footer'


export const AllComponent = () => {
  return (
   <>
   <Navbar/>
   <Home/>
   <CardComponent/>
   <GridBlurredBackdrop/>
   <LargeWithNewsletter/>
   </>
  )
}

  