import React from 'react'

const DashboardHero = () => {
  return (
    <div className='bg-blue flex justify-center items-center flex-col py-7'>

        <div  className='flex justify-center items-center flex-col gap-4 '>
              <h1 className='text-white text-3xl'>Dashboard</h1>
              <p className='w-[95%] md:w-[70%] text-left md:text-center   text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
             <div className='flex justify-center items-center gap-2'>
                  <button className='border rounded-full py-1 px-6 bg-white text-blue'>Cart</button>
                  <button className='border rounded-full py-1 px-5 text-white'>Wishlist</button>
             </div>
        </div>
    </div>
  )
}

export default DashboardHero