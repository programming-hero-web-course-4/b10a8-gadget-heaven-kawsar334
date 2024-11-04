import React from 'react'
import Sidebar from '../Sidebar'
import Product from './Product'

const Products = () => {
  return (
    <div className=' mt-[200px]'>
      <h1 className='text-3xl md:text-4xl text-center font-semibold '>Explore Cutting-Edge Gadgets</h1>
      <div className='w-[98%]  flex justify-between items-start gap-4  m-auto my-7 p-4 flex-col md:flex-row'>
     <Sidebar/>

        
        <div className='flex justify-center items-center  w-[100%] md:w-[75%] gap-2 p-4 flex-wrap'>

        <Product/>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />


        </div>
   
      </div>
    </div>
  )
}

export default Products