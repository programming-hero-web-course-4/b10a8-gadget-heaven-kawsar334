import React from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import DetailsContents from '../components/childrenComponents/DetailsContents'


const Details = () => {
  return (
    <div className=''>
          <Hero Contents={DetailsContents}/>

          <div className=' mt-[300px] md:mt-[150px] lg:mt-[130px]'>
                <h1 className='text-4xl'>Details contents</h1>

          </div>

    </div>
  )
}

export default Details